// load environment variables from .env file
import dotenvFlow from 'dotenv-flow';

dotenvFlow.config();

import Koa from 'koa';
import logger from 'koa-logger';
import koaBody from 'koa-body';
import passport from 'koa-passport';
import { Server as HttpServer } from 'http';
import {
  Context,
  Next
} from 'koa';
import sequelize from './db/sequelize';
import { associate } from './db/sync';

// config
import './config/passport';

// routes
import ping from './routes/ping';
import oauth from './routes/oauth';

export interface IState {
}

export interface ICustom {
}

export default class Server {
  public get httpServer(): HttpServer {
    return this._httpServer;
  }

  private app: Koa;
  private _httpServer!: HttpServer;

  constructor() {
    associate();
    this.app = new Koa<IState, ICustom>();
    this.middleware();
    this.route();
    this.initializeDb();
  }

  public listen(port: number): HttpServer {
    this._httpServer = this.app.listen(port);
    console.info(`Server is running on port ${port}`);
    return this.httpServer;
  }

  public close(): HttpServer | null {
    if (!this._httpServer) {
      console.info('Server is not running.');
      return null;
    }
    console.info('Server is closed.');
    return this._httpServer.close();
  }

  public serverless(): any {
    // return serverless(this.app);
  }

  private initializeDb(): void {
    sequelize.authenticate().then(
      () => {
        console.info('DB Connection has been established');
      },
      (err: any) => {
        console.error('Unable to connect to the DB:', err);
      }
    );
  }

  private async ensureDb(): Promise<void> {
    return new Promise((resolve, reject) => {
      let counter: number = 0;
      const tryConnect = async () => {
        try {
          await sequelize.authenticate();
          resolve();
        } catch (e) {
          counter++;
          console.info(`db connection failed ${counter}`);
          if (counter > 5) {
            reject(new Error('Failed after 5 retries'));
            return;
          }
          setTimeout(tryConnect, 10);
        }
      };
      tryConnect();
    });
  }

  private middleware(): void {
    this.app.use(logger());
    this.app.use(async (context: Context, next: Next) => {
      try {
        await this.ensureDb();
        return await next();
      } catch (e) {
        context.throw(e);
      }
    });
    this.app.use(koaBody());
    this.app.use(passport.initialize());
  }

  private route(): void {
    this.app.use(ping.routes());
    this.app.use(oauth.routes());
  }
}

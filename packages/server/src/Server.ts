// load environment variables from .env file
import dotenvFlow from 'dotenv-flow';

dotenvFlow.config();

// koa
import Koa, {
  Context,
  Next
} from 'koa';
import logger from 'koa-logger';
import koaBody from 'koa-body';
import { Server as HttpServer } from 'http';
import cors from './middlewares/cors';
import authToken from './middlewares/authToken';
import router from './routes';

// db
import sequelize, { associate } from './libs/sequelize';
// firebase
import admin from './libs/firebase-admin';
// schedule
import { initialize } from './libs/schedule';

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
  }

  public async listen(port: number): Promise<HttpServer> {
    await this.initialize();
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

  private async initialize(): Promise<void> {
    await this.initializeDb();
    await this.initializeFirebase();
    await this.initializeSchedule();
    await this.middleware();
  }

  private async middleware(): Promise<void> {
    this.app.use(logger());
    this.app.use(cors);
    this.app.use(authToken);
    this.app.use(async (context: Context, next: Next) => {
      try {
        await this.ensureDb();
        return await next();
      } catch (e) {
        context.throw(e);
      }
    });
    this.app.use(koaBody());
    this.app.use(router.routes()).use(router.allowedMethods());
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

  private async initializeDb(): Promise<void> {
    return sequelize.authenticate().then(
      () => {
        console.info('DB Connection has been established');
      },
      (err: any) => {
        console.error('Unable to connect to the DB:', err);
      }
    );
  }

  private async initializeFirebase(): Promise<void> {
  }

  private async initializeSchedule(): Promise<void> {
    await initialize();
  }
}

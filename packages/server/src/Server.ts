import * as dotenvFlow from 'dotenv-flow';
dotenvFlow.config();

import * as Koa from 'koa';
import * as logger from 'koa-logger';
import * as koaBody from 'koa-body';
import { Server as HttpServer } from 'http';
import sequelize from './database/sequelize';
import common from './routes/common';

// load environment variables from .env file

export default class Server {
  public get httpServer(): HttpServer {
    return this._httpServer;
  }

  private app: Koa;
  private _httpServer!: HttpServer;

  constructor() {
    this.app = new Koa();
    this.middleware();
    this.route();
    this.initializeDb();
  }

  public listen(port: number): HttpServer {
    this._httpServer = this.app.listen(port);
    return this.httpServer;
    console.log(`Server is running on port ${port}`);
  }

  public close(): HttpServer | null {
    if (!this._httpServer) {
      console.log('Server is not running.');
      return null;
    }
    return this._httpServer.close();
    console.log('Server is closed.');
  }

  public serverless(): any {
    // return serverless(this.app);
  }

  private initializeDb(): void {
    sequelize.authenticate().then(
      () => {
        console.log('DB Connection has been established');
      },
      (err: any) => {
        console.error('Unable to connect to the DB:', err);
      }
    );
  }

  private ensureDb() {
    // return new Promise((resolve, reject) => {
    //   let counter = 0;
    //   const tryConnect = async () => {
    //     try {
    //       await db.authenticate();
    //       resolve();
    //     } catch (e) {
    //       counter++;
    //       console.log(`db connection failed ${counter}`);
    //       if (counter > 5) {
    //         reject(new Error('Failed after 5 retries'));
    //         return;
    //       }
    //       setTimeout(tryConnect, 10);
    //     }
    //   };
    //   tryConnect();
    // });
  }

  private middleware(): void {
    this.app.use(logger());
    this.app.use(koaBody());
  }

  private route(): void {
    this.app.use(common.routes());
  }
}

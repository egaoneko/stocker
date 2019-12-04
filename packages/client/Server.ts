// koa
import express, {
  Express,
  Request,
  Response
} from 'express';
import bodyParser from 'body-parser';
import { Server as HttpServer } from 'http';

// next
import next from 'next';

// i18n
import nextI18NextMiddleware from 'next-i18next/middleware';
import nextI18Next from './i18n';

export interface IState {
}

export interface ICustom {
}

export default class Server {
  public get httpServer(): HttpServer {
    return this._httpServer;
  }

  private app: Express;
  private _httpServer!: HttpServer;

  constructor() {
    this.app = express();
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

  private async initialize(): Promise<void> {
    await this.middleware();
  }

  private async middleware(): Promise<void> {
    this.app.use(bodyParser());

    // next
    const isDev: boolean = process.env.SERVER_ENV !== 'production';
    const nextApp = next({ dev: isDev });

    await nextApp.prepare();
    const handle = nextApp.getRequestHandler();

    // i18n
    this.app.use(nextI18NextMiddleware(nextI18Next));

    this.app.get('*', (req: Request, res: Response) => {
      return handle(req, res)
    });
  }
}

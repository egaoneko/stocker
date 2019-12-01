// koa
import Koa, {
  Context,
} from 'koa';
import logger from 'koa-logger';
import koaBody from 'koa-body';
import mount from 'koa-mount';
import { Server as HttpServer } from 'http';

// next
import next from 'next';

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

  private async initialize(): Promise<void> {
    await this.middleware();
    await this.route();
  }

  private async middleware(): Promise<void> {
    this.app.use(logger());
    this.app.use(koaBody());
  }

  private async route(): Promise<void> {
    await this.mountNext();
  }

  private async mountNext(): Promise<void> {
    const isDev: boolean = process.env.SERVER_ENV !== 'production';
    const nextApp = next({ dev: isDev });

    await nextApp.prepare();
    const handle = nextApp.getRequestHandler();

    this.app.use(mount('/', async (ctx: Context) => {
      await handle(ctx.req, ctx.res);
      ctx.respond = false;
    }));
  }
}

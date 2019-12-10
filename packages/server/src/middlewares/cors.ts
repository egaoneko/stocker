import {
  Context,
  Next
} from 'koa';

export default async (ctx: Context, next: Next) => {
  ctx.set('Access-Control-Allow-Origin', 'https://stocker.smilecat.dev');
  if (ctx.headers.referer && ctx.headers.referer.indexOf('localhost:8080') > -1) {
    ctx.set('Access-Control-Allow-Origin', 'http://localhost:8080');
  }
  ctx.set('Access-Control-Allow-Credentials', 'true');
  ctx.set('Access-Control-Allow-Headers', ['Content-Type', 'Authorization'].join(','));
  return await next();
};
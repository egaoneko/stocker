import { Context } from 'koa';

export const crawl = async (ctx: Context): Promise<void> => {
  ctx.res.statusCode = 200;
  ctx.body = 'ok';
};

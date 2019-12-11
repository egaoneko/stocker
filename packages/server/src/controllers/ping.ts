import { Context } from 'koa';

export const ping = async (ctx: Context): Promise<void> => {
  ctx.status = 200;
  ctx.body = 'OK';
};

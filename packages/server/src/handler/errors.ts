import { Context } from 'koa';

export const authorizationError = (ctx: Context) => {
  ctx.status = 401;
  ctx.body = 'Unauthorized';
};

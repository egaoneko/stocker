import {
  Context,
  Next
} from 'koa';
import { authorizationError } from '../handler/errors';

export default async (ctx: Context, next: Next) => {
  if (!ctx.user) {
    authorizationError(ctx);
    return;
  }
  return await next();
};
import {
  Context,
  Next
} from 'koa';
import {
  CONTEXT,
  TOKEN_NAME
} from '../constant';
import { apply } from '@stocker/core/lib/utils/common';
import DecodeToken from '@stocker/core/lib/domain/use-cases/auth/DecodeToken';
import { async } from 'rxjs/internal/scheduler/async';
import { queue } from 'rxjs/internal/scheduler/queue';
import FindUserById from '@stocker/core/lib/domain/use-cases/account/FindUserById';

export default async (ctx: Context, next: Next) => {
  const token: string = (ctx.headers.authorization || '').replace('Bearer ', '');

  if (!token) {
    ctx.user = null;
    return await next();
  }

  try {
    const uid: string | null = await apply(CONTEXT.useCases.decodeToken, (it: DecodeToken) => it.token = token)
      .runOnce(async, queue)
      .toPromise();

    if (!uid) {
      ctx.user = null;
      return await next();
    }

    ctx.user = await apply(CONTEXT.useCases.findUserById, (it: FindUserById) => it.id = uid)
      .runOnce(async, queue)
      .toPromise();
  } catch (e) {
    ctx.user = null;
  }

  return await next();
};
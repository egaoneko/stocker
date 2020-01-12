import { Context } from 'koa';
import Joi from 'joi';
import { apply } from '@stocker/core/lib/utils/common';
import { CONTEXT } from '../constant';
import { async } from 'rxjs/internal/scheduler/async';
import { queue } from 'rxjs/internal/scheduler/queue';
import User from '@stocker/core/lib/domain/entities/account/User';
import FindUserByUid from '@stocker/core/lib/domain/use-cases/auth/FindUserByUid';
import CreateUser from '@stocker/core/lib/domain/use-cases/account/CreateUser';

export const create = async (ctx: Context): Promise<void> => {
  try {
    const scheduleSchema = Joi.object({
      id: Joi.string()
        .required(),
    });
    const params: any = await scheduleSchema.validate(ctx.request.body);
    const user: User | null = await apply(
      CONTEXT.useCases.findUserByUid,
      (it: FindUserByUid) => it.uid = params.id,
    )
      .runOnce(async, queue)
      .toPromise();

    if (!user) {
      ctx.status = 500;
      ctx.body = 'Unauthorized';
    }

    const [_, created]: [User, boolean] = await apply(
      CONTEXT.useCases.createUser,
      (it: CreateUser) => it.user = user
    )
      .runOnce(async, queue)
      .toPromise();

    ctx.status = 200;
    ctx.body = {
      created,
    };
  } catch (err) {
    ctx.status = 500;
    ctx.body = err;
  }
};

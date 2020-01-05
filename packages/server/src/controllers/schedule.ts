import { Context } from 'koa';
import Joi from 'joi';
import { ScheduleFunction } from '@stocker/core/lib/enums/schedule';
import { CONTEXT } from '../constant';
import Schedule from '@stocker/core/lib/domain/entities/schedule/Schedule';
import { apply } from '@stocker/core/lib/utils/common';
import CreateSchedule from '@stocker/core/lib/domain/use-cases/schedule/CreateSchedule';
import { async } from 'rxjs/internal/scheduler/async';
import { queue } from 'rxjs/internal/scheduler/queue';

const schema = Joi.object({
  expression: Joi.string()
    .regex(new RegExp('^(28|\\*) (2|\\*) (7|\\*) (1|\\*) (1|\\*)$'))
    .required(),

  scheduleFunction: Joi.string()
    .regex(new RegExp(`^${Object.values(ScheduleFunction).join('|')}$`))
    .required(),

  options: Joi.object()
    .default({}),
});

export const create = async (ctx: Context): Promise<void> => {
  try {
    const params: any = await schema.validate(ctx.request.body);
    const schedule: Schedule = new Schedule(
      params.expression,
      params.scheduleFunction,
    );
    schedule.options = params.options;

    const [_, created]: [Schedule, boolean] = await apply(
      CONTEXT.useCases.createSchedule,
      (it: CreateSchedule) => it.schedule = schedule
    )
      .runOnce(async, queue)
      .toPromise();

    if (created) {
      ctx.status = 200;
      ctx.body = 'OK';
    } else {
      ctx.status = 409;
      ctx.body = 'Already exists';
    }
  } catch (err) {
    ctx.status = 500;
    ctx.body = err;
  }
};

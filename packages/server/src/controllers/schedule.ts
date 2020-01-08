import { Context } from 'koa';
import Joi from 'joi';
import { ScheduleFunction } from '@stocker/core/lib/enums/schedule';
import { CONTEXT } from '../constant';
import Schedule from '@stocker/core/lib/domain/entities/schedule/Schedule';
import { apply } from '@stocker/core/lib/utils/common';
import CreateSchedule from '@stocker/core/lib/domain/use-cases/schedule/CreateSchedule';
import { async } from 'rxjs/internal/scheduler/async';
import { queue } from 'rxjs/internal/scheduler/queue';
import FindSchedulesBy from '@stocker/core/lib/domain/use-cases/schedule/FindSchedulesBy';
import UpdateSchedule from '@stocker/core/lib/domain/use-cases/schedule/UpdateSchedule';

const SCHEDULE_FUNCTION_REGEX: RegExp = new RegExp(`^${Object.values(ScheduleFunction).join('|')}$`);
export const create = async (ctx: Context): Promise<void> => {
  try {
    const scheduleSchema = Joi.object({
      id: Joi.string(),

      expression: Joi.string()
        .required(),

      scheduleFunction: Joi.string()
        .regex(SCHEDULE_FUNCTION_REGEX)
        .required(),

      priority: Joi.number()
        .required(),

      options: Joi.object(),
    });
    const params: any = await scheduleSchema.validate(ctx.request.body);
    const schedule: Schedule = new Schedule(
      params.expression,
      params.scheduleFunction,
      params.priority,
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

export const update = async (ctx: Context): Promise<void> => {
  const scheduleSchema = Joi.object({
    id: Joi.string(),

    expression: Joi.string(),

    scheduleFunction: Joi.string()
      .regex(SCHEDULE_FUNCTION_REGEX),

    priority: Joi.number(),

    options: Joi.object(),
  }).or('id', 'scheduleFunction');

  try {
    const params: any = await scheduleSchema.validate(ctx.request.body);
    const schedules: Schedule[] = await apply(
      CONTEXT.useCases.findSchedulesBy,
      (it: FindSchedulesBy) => it.options = {
        where: {
          scheduleFunction: params.scheduleFunction,
        }
      }
    )
      .runOnce(async, queue)
      .toPromise();

    if (!schedules || schedules.length === 0) {
      ctx.status = 500;
      ctx.body = 'Can not find schedule';
      return;
    }

    const schedule: Schedule = schedules[0];

    if (typeof params.expression !== 'undefined') {
      schedule.expression = params.expression;
    }

    if (typeof params.priority !== 'undefined') {
      schedule.priority = params.priority;
    }

    if (typeof params.options !== 'undefined') {
      schedule.options = params.options;
    }

    const [_, updated]: [Schedule, boolean] = await apply(
      CONTEXT.useCases.updateSchedule,
      (it: UpdateSchedule) => it.schedule = schedule
    )
      .runOnce(async, queue)
      .toPromise();

    if (updated) {
      ctx.status = 200;
      ctx.body = 'OK';
    } else {
      ctx.status = 500;
      ctx.body = 'Can not update schedule';
    }
  } catch (err) {
    ctx.status = 500;
    ctx.body = err;
  }
};

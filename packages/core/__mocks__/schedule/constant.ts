import { ScheduleFunction } from '../../src/enums/schedule';
import Schedule from '../../src/domain/entities/schedule/Schedule';
import { DEFAULT_ID } from '../constant';

export const DEFAULT_EXPRESSION: string = '* * * * *';
export const DEFAULT_SCHEDULE_FUNCTION: ScheduleFunction = ScheduleFunction.CRAWL_STOCK_ITEMS;
export const DEFAULT_PRIORITY: number = 0;
export const DEFAULT_OPTIONS: object = {};
export const DEFAULT_LAST_EXECUTED_TIME: Date = new Date();

export const DEFAULT_SCHEDULE = new Schedule(
  DEFAULT_EXPRESSION,
  DEFAULT_SCHEDULE_FUNCTION,
  DEFAULT_PRIORITY,
);

DEFAULT_SCHEDULE.id = DEFAULT_ID;
DEFAULT_SCHEDULE.options = DEFAULT_OPTIONS;
DEFAULT_SCHEDULE.lastExecutedTime = DEFAULT_LAST_EXECUTED_TIME;
import Schedule from '../../../../src/domain/entities/schedule/Schedule';
import { ScheduleFunction } from '../../../../src/enums/schedule';

describe('Schedule', () => {
  test('equal', () => {
    const date: Date = new Date();
    const schedule: Schedule = new Schedule(
      '* * * * *',
      ScheduleFunction.CRAWL_STOCK_ITEMS,
      0,
    );
    schedule.options = {};
    schedule.lastExecutedTime = date;

    const equalSchedule: Schedule = new Schedule(
      '* * * * *',
      ScheduleFunction.CRAWL_STOCK_ITEMS,
      0,
    );
    equalSchedule.options = {};
    equalSchedule.lastExecutedTime = date;
    expect(schedule.equal(equalSchedule)).toBeTruthy();

    const notEqualSchedule: Schedule = new Schedule(
      '',
      schedule.scheduleFunction,
      0,
    );
    notEqualSchedule.options = {};
    notEqualSchedule.lastExecutedTime = date;
    expect(schedule.equal(notEqualSchedule)).toBeFalsy();
  });

  test('clone', () => {
    const schedule: Schedule = new Schedule(
      '* * * * *',
      ScheduleFunction.CRAWL_STOCK_ITEMS,
      0,
    );
    schedule.id = 'id';
    schedule.options = {};
    schedule.lastExecutedTime = new Date();
    const clone: Schedule = schedule.clone();
    expect(clone.id).toBe(schedule.id);
    expect(clone.expression).toBe(schedule.expression);
    expect(clone.scheduleFunction).toBe(schedule.scheduleFunction);
    expect(clone.options).toEqual(schedule.options);
    expect(clone.lastExecutedTime).toBe(schedule.lastExecutedTime);
  });

  test('toString', () => {
    const schedule: Schedule = new Schedule(
      '* * * * *',
      ScheduleFunction.CRAWL_STOCK_ITEMS,
      0,
    );
    schedule.id = 'id';
    schedule.options = {};
    schedule.lastExecutedTime = new Date();
    expect(schedule.toString()).toBe([
      schedule.id,
      schedule.expression,
      schedule.scheduleFunction,
      schedule.priority,
      schedule.options,
      schedule.lastExecutedTime,
    ].join(','));
  });
});

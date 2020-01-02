import Schedule from '../../../../src/domain/entities/schedule/Schedule';
import { ScheduleFunction } from '../../../../src/enums/schedule';

describe('Schedule', () => {
  test('equal', () => {
    const date: Date = new Date();
    const schedule: Schedule = new Schedule(
      '* * * * *',
      ScheduleFunction.CRAWL_STOCK_ITEMS,
    );
    schedule.options = {};
    schedule.lastExecutedTime = date;

    const equalSchedule: Schedule = new Schedule(
      '* * * * *',
      ScheduleFunction.CRAWL_STOCK_ITEMS,
    );
    equalSchedule.options = {};
    equalSchedule.lastExecutedTime = date;
    expect(schedule.equal(equalSchedule)).toBeTruthy();

    const notEqualSchedule: Schedule = new Schedule(
      '',
      schedule.scheduleFunction,
    );
    notEqualSchedule.options = {};
    notEqualSchedule.lastExecutedTime = date;
    expect(schedule.equal(notEqualSchedule)).toBeFalsy();
  });

  test('clone', () => {
    const schedule: Schedule = new Schedule(
      '* * * * *',
      ScheduleFunction.CRAWL_STOCK_ITEMS,
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
    );
    schedule.id = 'id';
    schedule.options = {};
    schedule.lastExecutedTime = new Date();
    expect(schedule.toString()).toBe([
      schedule.id,
      schedule.expression,
      schedule.scheduleFunction,
      schedule.options,
      schedule.lastExecutedTime,
    ].join(','));
  });
});

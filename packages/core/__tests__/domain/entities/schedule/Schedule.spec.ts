import Schedule from '../../../../src/domain/entities/schedule/Schedule';
import { ScheduleFunction } from '../../../../src/enums/schedule';

describe('Schedule', () => {
  test('equal', () => {
    const schedule: Schedule = new Schedule(
      '* * * * *',
      ScheduleFunction.CRAWL_STOCK_ITEMS,
      {},
      new Date()
    );
    expect(schedule.equal(new Schedule(
      schedule.expression,
      schedule.scheduleFunction,
      schedule.options,
      schedule.lastExecutedTime,
    ))).toBeTruthy();
    expect(schedule.equal(new Schedule(
      '',
      schedule.scheduleFunction,
      schedule.options,
      schedule.lastExecutedTime,
    ))).toBeFalsy();
  });

  test('clone', () => {
    const schedule: Schedule = new Schedule(
      '* * * * *',
      ScheduleFunction.CRAWL_STOCK_ITEMS,
      {},
      new Date()
    );
    const clone: Schedule = schedule.clone();
    expect(clone.expression).toBe(schedule.expression);
    expect(clone.scheduleFunction).toBe(schedule.scheduleFunction);
    expect(clone.options).toEqual(schedule.options);
    expect(clone.lastExecutedTime).toBe(schedule.lastExecutedTime);
  });

  test('toString', () => {
    const schedule: Schedule = new Schedule(
      '* * * * *',
      ScheduleFunction.CRAWL_STOCK_ITEMS,
      {},
      new Date()
    );
    expect(schedule.toString()).toBe([
      schedule.expression,
      schedule.scheduleFunction,
      schedule.options,
      schedule.lastExecutedTime,
    ].join(','));
  });
});

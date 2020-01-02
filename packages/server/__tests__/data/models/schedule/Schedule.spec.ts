import '../../../__config__/sequelize';
import Schedule from '../../../../src/data/models/schedule/Schedule';
import ScheduleEntity from '@stocker/core/lib/domain/entities/schedule/Schedule';
import { DEFAULT_SCHEDULE } from '../../../../__mocks__/schedule/constant';

describe('Schedule Model', () => {

  test('toEntity', () => {
    const schedule: Schedule = new Schedule();
    schedule.id = DEFAULT_SCHEDULE.id as string;
    schedule.expression = DEFAULT_SCHEDULE.expression;
    schedule.scheduleFunction = DEFAULT_SCHEDULE.scheduleFunction;
    schedule.options = JSON.stringify(DEFAULT_SCHEDULE.options);
    schedule.lastExecutedTime = DEFAULT_SCHEDULE.lastExecutedTime;

    const scheduleEntity: ScheduleEntity = schedule.toEntity();

    expect(schedule.id).toEqual(scheduleEntity.id);
    expect(schedule.expression).toEqual(scheduleEntity.expression);
    expect(schedule.scheduleFunction).toEqual(scheduleEntity.scheduleFunction);
    expect(JSON.parse(schedule.options)).toEqual(scheduleEntity.options);
    expect(schedule.lastExecutedTime).toEqual(scheduleEntity.lastExecutedTime);
  });

  test('createSchedule', async () => {
    const [schedule, created]: [Schedule, boolean] = await Schedule.createSchedule(DEFAULT_SCHEDULE);
    expect(created).toBeTruthy();

    const deletedRows: number = await Schedule.deleteSchedule(schedule.toEntity());
    expect(deletedRows).toBe(1);
  });

  test('updateSchedule', async () => {
    const [schedule, created] = await Schedule.createSchedule(DEFAULT_SCHEDULE);

    if (!created) {
      throw 'Does not created';
    }

    const newSchedule: ScheduleEntity = schedule.toEntity().clone();

    const [rows]: [number, Schedule[]] = await Schedule.updateSchedule(newSchedule);
    expect(rows).toBe(1);

    const deletedRows: number = await Schedule.deleteSchedule(schedule.toEntity());
    expect(deletedRows).toBe(1);
  });

  test('updateSchedule without id', () => {
    expect(() => {
      const newSchedule: ScheduleEntity = DEFAULT_SCHEDULE.clone();
      newSchedule.id = '';
      Schedule.updateSchedule(newSchedule);
    }).toThrowError('id is empty.');
  });

  test('updateSchedule with unknown id', async () => {
    const schedule: ScheduleEntity = DEFAULT_SCHEDULE.clone();
    const [rows]: [number, Schedule[]] = await Schedule.updateSchedule(schedule);
    expect(rows).toBe(0);
  });

  test('deleteSchedule', async () => {
    const [schedule, created] = await Schedule.createSchedule(DEFAULT_SCHEDULE);

    if (!created) {
      throw 'Does not created';
    }

    const rows: number = await Schedule.deleteSchedule(schedule.toEntity());
    expect(rows).toBe(1);
  });

  test('deleteSchedule without id', () => {
    expect(() => {
      const schedule: ScheduleEntity = DEFAULT_SCHEDULE.clone();
      schedule.id = '';
      Schedule.deleteSchedule(schedule);
    }).toThrowError('id is empty.');
  });

  test('deleteSchedule with unknown id', async () => {
    const schedule: ScheduleEntity = DEFAULT_SCHEDULE.clone();
    const rows: number = await Schedule.deleteSchedule(schedule);
    expect(rows).toBe(0);
  });

  test('findSchedulesBy', async () => {
    const [schedule, created] = await Schedule.createSchedule(DEFAULT_SCHEDULE);

    if (!created) {
      throw 'Does not created';
    }

    const schedules: Schedule[] | null = await Schedule.findSchedulesBy({});

    if (!schedules) {
      throw 'Does not created';
    }

    expect(schedules.length).toBe(1);
    expect(schedules[0].scheduleFunction).toBe(schedule.scheduleFunction);

    const rows: number = await Schedule.deleteSchedule(schedule.toEntity());
    expect(rows).toBe(1);
  });

  test('findSchedulesBy with unknown id', async () => {
    const [schedule, created] = await Schedule.createSchedule(DEFAULT_SCHEDULE);

    if (!created) {
      throw 'Does not created';
    }

    const schedules: Schedule[] | null = await Schedule.findSchedulesBy({
      id: 'ea37d172-cc7b-4c26-be53-47bd02a5e327',
    });

    if (schedules) {
      expect(schedules.length).toBe(0);
    } else {
      expect(schedules).toBeNull();
    }

    const rows: number = await Schedule.deleteSchedule(schedule.toEntity());
    expect(rows).toBe(1);
  });

  test('countSchedules', async () => {
    const [schedule, created] = await Schedule.createSchedule(DEFAULT_SCHEDULE);

    if (!created) {
      throw 'Does not created';
    }

    const count: number = await Schedule.countSchedules({});
    expect(count).toBeGreaterThan(0);

    const rows: number = await Schedule.deleteSchedule(schedule.toEntity());
    expect(rows).toBe(1);
  });

  test('countSchedules with unknown id', async () => {
    const [schedule, created] = await Schedule.createSchedule(DEFAULT_SCHEDULE);

    if (!created) {
      throw 'Does not created';
    }

    const count: number = await Schedule.countSchedules({
      id: 'ea37d172-cc7b-4c26-be53-47bd02a5e327'
    });
    expect(count).toBe(0);

    const rows: number = await Schedule.deleteSchedule(schedule.toEntity());
    expect(rows).toBe(1);
  });
});

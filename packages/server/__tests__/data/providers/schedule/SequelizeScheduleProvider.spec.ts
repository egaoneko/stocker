import '../../../__config__/sequelize';
import SequelizeScheduleProvider from '../../../../src/data/providers/schedule/SequelizeScheduleProvider';
import Schedule from '@stocker/core/lib/domain/entities/schedule/Schedule';
import { DEFAULT_SCHEDULE } from '../../../../__mocks__/schedule/constant';

describe('SequelizeScheduleProvider', () => {
  const provider: SequelizeScheduleProvider = new SequelizeScheduleProvider();

  test('createSchedule', async () => {
    const [schedule, created]: [Schedule, boolean] = await provider.createSchedule(DEFAULT_SCHEDULE).toPromise();
    expect(created).toBeTruthy();

    const [deletedSchedule, deleted]: [Schedule, boolean] = await provider.deleteSchedule(schedule).toPromise();
    expect(deleted).toBeTruthy();
  });

  test('updateSchedule', async () => {
    const [schedule, created]: [Schedule, boolean] = await provider.createSchedule(DEFAULT_SCHEDULE).toPromise();

    if (!created) {
      throw 'Does not created';
    }

    const [updatedSchedule, updated]: [Schedule, boolean] = await provider.updateSchedule(schedule).toPromise();

    expect(updated).toBeTruthy();

    const [deletedSchedule, deleted]: [Schedule, boolean] = await provider.deleteSchedule(schedule).toPromise();
    expect(deleted).toBeTruthy();
  });

  test('deleteSchedule', async () => {
    const [schedule, created]: [Schedule, boolean] = await provider.createSchedule(DEFAULT_SCHEDULE).toPromise();

    if (!created) {
      throw 'Does not created';
    }

    const [deletedSchedule, deleted]: [Schedule, boolean] = await provider.deleteSchedule(schedule).toPromise();

    expect(deleted).toBeTruthy();
  });

  test('findSchedulesBy', async () => {
    const [schedule, created]: [Schedule, boolean] = await provider.createSchedule(DEFAULT_SCHEDULE).toPromise();

    if (!created) {
      throw 'Does not created';
    }

    const schedules: Schedule[] = await provider.findSchedulesBy({}).toPromise();

    if (!schedules) {
      throw 'Does not created';
    }

    expect(schedules.length).toBeGreaterThan(0);
    expect(schedules[0].scheduleFunction).toBe(schedule.scheduleFunction);

    const [deletedSchedule, deleted]: [Schedule, boolean] = await provider.deleteSchedule(schedule).toPromise();
    expect(deleted).toBeTruthy();
  });

  test('countSchedules', async () => {
    const [schedule, created]: [Schedule, boolean] = await provider.createSchedule(DEFAULT_SCHEDULE).toPromise();

    if (!created) {
      throw 'Does not created';
    }

    const count: number = await provider.countSchedules({}).toPromise();
    expect(count).toBeGreaterThan(0);

    const [deletedSchedule, deleted]: [Schedule, boolean] = await provider.deleteSchedule(schedule).toPromise();
    expect(deleted).toBeTruthy();
  });

});
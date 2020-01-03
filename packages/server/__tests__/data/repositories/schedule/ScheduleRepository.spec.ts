import mockSequelizeScheduleProvider, {
  mockCreateSchedule,
  mockUpdateSchedule,
  mockDeleteSchedule,
  mockFindSchedulesBy,
  mockCountSchedules,
} from '../../../../__mocks__/schedule/SequelizeScheduleProvider';
import ScheduleRepository from '../../../../src/data/repositories/schedule/ScheduleRepository';
import Schedule from '@stocker/core/lib/domain/entities/schedule/Schedule';
import { Options } from '@stocker/core/lib/interfaces/repository/options';
import { DEFAULT_SCHEDULE } from '../../../../__mocks__/schedule/constant';

describe('ScheduleRepository', () => {
  const repository: ScheduleRepository = new ScheduleRepository((new mockSequelizeScheduleProvider()) as any);

  beforeEach(() => {
    mockCreateSchedule.mockClear();
    mockUpdateSchedule.mockClear();
    mockDeleteSchedule.mockClear();
    mockFindSchedulesBy.mockClear();
    mockCountSchedules.mockClear();
  });

  test('createSchedule', (done) => {
    repository.createSchedule(DEFAULT_SCHEDULE)
      .subscribe(([schedule, created]: [Schedule, boolean]) => {
        expect(mockCreateSchedule).toHaveBeenCalledTimes(1);
        expect(mockCreateSchedule).toBeCalledWith(DEFAULT_SCHEDULE);
        expect(created).toBeTruthy();
        expect(schedule).toEqual(DEFAULT_SCHEDULE);
        done();
      });
  });

  test('updateSchedule', (done) => {
    repository.updateSchedule(DEFAULT_SCHEDULE)
      .subscribe(([schedule, updated]: [Schedule, boolean]) => {
        expect(mockUpdateSchedule).toHaveBeenCalledTimes(1);
        expect(mockUpdateSchedule).toBeCalledWith(DEFAULT_SCHEDULE);
        expect(updated).toBeTruthy();
        expect(schedule).toEqual(DEFAULT_SCHEDULE);
        done();
      });
  });

  test('deleteSchedule', (done) => {
    repository.deleteSchedule(DEFAULT_SCHEDULE)
      .subscribe(([schedule, deleted]: [Schedule, boolean]) => {
        expect(mockDeleteSchedule).toHaveBeenCalledTimes(1);
        expect(mockDeleteSchedule).toBeCalledWith(DEFAULT_SCHEDULE);
        expect(deleted).toBeTruthy();
        expect(schedule).toEqual(DEFAULT_SCHEDULE);
        done();
      });
  });

  test('findSchedulesBy', (done) => {
    const options: Options = {};
    repository.findSchedulesBy(options)
      .subscribe((schedules: Schedule[]) => {
        expect(mockFindSchedulesBy).toHaveBeenCalledTimes(1);
        expect(mockFindSchedulesBy).toBeCalledWith(options);
        expect(schedules.length).toBe(1);
        expect(schedules[0]).toEqual(DEFAULT_SCHEDULE);
        done();
      });
  });

  test('countSchedules', (done) => {
    const options: Options = {};
    repository.countSchedules(options)
      .subscribe((count: number) => {
        expect(mockCountSchedules).toHaveBeenCalledTimes(1);
        expect(mockCountSchedules).toBeCalledWith(options);
        expect(count).toBe(1);
        done();
      });
  });
});

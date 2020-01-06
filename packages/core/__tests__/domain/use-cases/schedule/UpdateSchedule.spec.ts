import { async } from 'rxjs/internal/scheduler/async';
import { queue } from 'rxjs/internal/scheduler/queue';
import { apply } from '../../../../src/utils/common';
import mockScheduleRepository, {
  mockUpdateSchedule,
} from '../../../../__mocks__/schedule/ScheduleRepository';
import UpdateSchedule from '../../../../src/domain/use-cases/schedule/UpdateSchedule';
import Schedule from '../../../../src/domain/entities/schedule/Schedule';
import {
  DEFAULT_EXPRESSION,
  DEFAULT_PRIORITY,
  DEFAULT_SCHEDULE,
  DEFAULT_SCHEDULE_FUNCTION
} from '../../../../__mocks__/schedule/constant';
import { DEFAULT_ID } from '../../../../__mocks__/constant';

describe('UpdateSchedule UseCase', () => {
  beforeEach(() => {
    mockScheduleRepository.mockClear();
    mockUpdateSchedule.mockClear();
  });

  test('UpdateSchedule is called', async() => {
    const repository = new mockScheduleRepository();
    const useCase: UpdateSchedule = new UpdateSchedule(repository);

    const result: [Schedule, boolean] = await apply(useCase, (it: UpdateSchedule) => it.schedule = DEFAULT_SCHEDULE)
      .runOnce(async, queue)
      .toPromise();
    expect(mockUpdateSchedule).toHaveBeenCalledTimes(1);
    expect(mockUpdateSchedule).toBeCalledWith(DEFAULT_SCHEDULE);
  });

  test('throw exception without entity', () => {
    const repository = new mockScheduleRepository();
    const useCase: UpdateSchedule = new UpdateSchedule(repository);

    expect(() => {
      apply(useCase, () => {})
        .runOnce(async, queue)
    }).toThrowError('Invalid params in UseCase');
  });

  test('throw exception with invalid expression', () => {
    const repository = new mockScheduleRepository();
    const useCase: UpdateSchedule = new UpdateSchedule(repository);
    const schedule: Schedule = new Schedule(DEFAULT_EXPRESSION, DEFAULT_SCHEDULE_FUNCTION, DEFAULT_PRIORITY);
    (schedule as any).expression = null;
    schedule.id = DEFAULT_ID;

    expect(() => {
      apply(useCase, ((it: UpdateSchedule) => it.schedule = schedule))
        .runOnce(async, queue)
    }).toThrowError('Invalid params in UseCase');
  });

  test('throw exception with invalid scheduleFunction', () => {
    const repository = new mockScheduleRepository();
    const useCase: UpdateSchedule = new UpdateSchedule(repository);
    const schedule: Schedule = new Schedule(DEFAULT_EXPRESSION, DEFAULT_SCHEDULE_FUNCTION, DEFAULT_PRIORITY);
    (schedule as any).scheduleFunction = null;
    schedule.id = DEFAULT_ID;

    expect(() => {
      apply(useCase, ((it: UpdateSchedule) => it.schedule = schedule))
        .runOnce(async, queue)
    }).toThrowError('Invalid params in UseCase');
  });

  test('throw exception with invalid id', () => {
    const repository = new mockScheduleRepository();
    const useCase: UpdateSchedule = new UpdateSchedule(repository);
    const schedule: Schedule = new Schedule(DEFAULT_EXPRESSION, DEFAULT_SCHEDULE_FUNCTION, DEFAULT_PRIORITY);

    expect(() => {
      apply(useCase, ((it: UpdateSchedule) => it.schedule = schedule))
        .runOnce(async, queue)
    }).toThrowError('Invalid params in UseCase');
  });
});

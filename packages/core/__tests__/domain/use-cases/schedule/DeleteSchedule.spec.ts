import { async } from 'rxjs/internal/scheduler/async';
import { queue } from 'rxjs/internal/scheduler/queue';
import { apply } from '../../../../src/utils/common';
import mockScheduleRepository, {
  mockDeleteSchedule,
} from '../../../../__mocks__/schedule/ScheduleRepository';
import DeleteSchedule from '../../../../src/domain/use-cases/schedule/DeleteSchedule';
import Schedule from '../../../../src/domain/entities/schedule/Schedule';
import {
  DEFAULT_EXPRESSION,
  DEFAULT_PRIORITY,
  DEFAULT_SCHEDULE,
  DEFAULT_SCHEDULE_FUNCTION
} from '../../../../__mocks__/schedule/constant';
import { DEFAULT_ID } from '../../../../__mocks__/constant';

describe('DeleteSchedule UseCase', () => {
  beforeEach(() => {
    mockScheduleRepository.mockClear();
    mockDeleteSchedule.mockClear();
  });

  test('DeleteSchedule is called', async () => {
    const repository = new mockScheduleRepository();
    const useCase: DeleteSchedule = new DeleteSchedule(repository);

    const result: [Schedule, boolean] = await apply(useCase, (it: DeleteSchedule) => it.schedule = DEFAULT_SCHEDULE)
      .runOnce(async, queue)
      .toPromise();
    expect(mockDeleteSchedule).toHaveBeenCalledTimes(1);
    expect(mockDeleteSchedule).toBeCalledWith(DEFAULT_SCHEDULE);
  });

  test('throw exception without entity', () => {
    const repository = new mockScheduleRepository();
    const useCase: DeleteSchedule = new DeleteSchedule(repository);

    expect(() => {
      apply(useCase, () => {
      })
        .runOnce(async, queue)
    }).toThrowError('Invalid params in UseCase');
  });

  test('throw exception with invalid expression', () => {
    const repository = new mockScheduleRepository();
    const useCase: DeleteSchedule = new DeleteSchedule(repository);
    const schedule: Schedule = new Schedule(DEFAULT_EXPRESSION, DEFAULT_SCHEDULE_FUNCTION, DEFAULT_PRIORITY);
    (schedule as any).expression = null;
    schedule.id = DEFAULT_ID;

    expect(() => {
      apply(useCase, ((it: DeleteSchedule) => it.schedule = schedule))
        .runOnce(async, queue)
    }).toThrowError('Invalid params in UseCase');
  });

  test('throw exception with invalid scheduleFunction', () => {
    const repository = new mockScheduleRepository();
    const useCase: DeleteSchedule = new DeleteSchedule(repository);
    const schedule: Schedule = new Schedule(DEFAULT_EXPRESSION, DEFAULT_SCHEDULE_FUNCTION, DEFAULT_PRIORITY);
    (schedule as any).scheduleFunction = null;
    schedule.id = DEFAULT_ID;

    expect(() => {
      apply(useCase, ((it: DeleteSchedule) => it.schedule = schedule))
        .runOnce(async, queue)
    }).toThrowError('Invalid params in UseCase');
  });

  test('throw exception with invalid id', () => {
    const repository = new mockScheduleRepository();
    const useCase: DeleteSchedule = new DeleteSchedule(repository);
    const schedule: Schedule = new Schedule(DEFAULT_EXPRESSION, DEFAULT_SCHEDULE_FUNCTION, DEFAULT_PRIORITY);

    expect(() => {
      apply(useCase, ((it: DeleteSchedule) => it.schedule = schedule))
        .runOnce(async, queue)
    }).toThrowError('Invalid params in UseCase');
  });
});

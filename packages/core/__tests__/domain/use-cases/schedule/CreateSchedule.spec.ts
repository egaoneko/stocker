import { async } from 'rxjs/internal/scheduler/async';
import { queue } from 'rxjs/internal/scheduler/queue';
import { apply } from '../../../../src/utils/common';
import mockScheduleRepository, {
  mockCreateSchedule,
} from '../../../../__mocks__/schedule/ScheduleRepository';
import CreateSchedule from '../../../../src/domain/use-cases/schedule/CreateSchedule';
import Schedule from '../../../../src/domain/entities/schedule/Schedule';
import {
  DEFAULT_EXPRESSION,
  DEFAULT_SCHEDULE,
  DEFAULT_SCHEDULE_FUNCTION
} from '../../../../__mocks__/schedule/constant';

describe('CreateSchedule UseCase', () => {
  beforeEach(() => {
    mockScheduleRepository.mockClear();
    mockCreateSchedule.mockClear();
  });

  test('CreateSchedule is called', async() => {
    const repository = new mockScheduleRepository();
    const useCase: CreateSchedule = new CreateSchedule(repository);

    const result: [Schedule, boolean] = await apply(useCase, (it: CreateSchedule) => it.schedule = DEFAULT_SCHEDULE)
      .runOnce(async, queue)
      .toPromise();
    expect(mockCreateSchedule).toHaveBeenCalledTimes(1);
    expect(mockCreateSchedule).toBeCalledWith(DEFAULT_SCHEDULE)
  });

  test('throw exception without entity', () => {
    const repository = new mockScheduleRepository();
    const useCase: CreateSchedule = new CreateSchedule(repository);

    expect(() => {
      apply(useCase, () => {})
        .runOnce(async, queue)
    }).toThrowError('Invalid params in UseCase');
  });

  test('throw exception with invalid expression', () => {
    const repository = new mockScheduleRepository();
    const useCase: CreateSchedule = new CreateSchedule(repository);
    const schedule: Schedule = new Schedule(DEFAULT_EXPRESSION, DEFAULT_SCHEDULE_FUNCTION);
    (schedule as any).expression = null;

    expect(() => {
      apply(useCase, ((it: CreateSchedule) => it.schedule = schedule))
        .runOnce(async, queue)
    }).toThrowError('Invalid params in UseCase');
  });

  test('throw exception with invalid scheduleFunction', () => {
    const repository = new mockScheduleRepository();
    const useCase: CreateSchedule = new CreateSchedule(repository);
    const schedule: Schedule = new Schedule(DEFAULT_EXPRESSION, DEFAULT_SCHEDULE_FUNCTION);
    (schedule as any).scheduleFunction = null;

    expect(() => {
      apply(useCase, ((it: CreateSchedule) => it.schedule = schedule))
        .runOnce(async, queue)
    }).toThrowError('Invalid params in UseCase');
  });
});

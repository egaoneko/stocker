import { async } from 'rxjs/internal/scheduler/async';
import { queue } from 'rxjs/internal/scheduler/queue';
import { apply } from '../../../../src/utils/common';
import mockScheduleRepository, {
  mockCountSchedules,
} from '../../../../__mocks__/schedule/ScheduleRepository';
import CountSchedules from '../../../../src/domain/use-cases/schedule/CountSchedules';
import Schedule from '../../../../src/domain/entities/schedule/Schedule';
import { DEFAULT_FIND_OPTIONS } from '../../../../__mocks__/constant';

describe('CountSchedules UseCase', () => {
  beforeEach(() => {
    mockScheduleRepository.mockClear();
    mockCountSchedules.mockClear();
  });

  test('CountSchedules is called', async() => {
    const repository = new mockScheduleRepository();
    const useCase: CountSchedules = new CountSchedules(repository);

    const result: number = await apply(useCase, (it: CountSchedules) => it.options = DEFAULT_FIND_OPTIONS)
      .runOnce(async, queue)
      .toPromise();
    expect(mockCountSchedules).toHaveBeenCalledTimes(1);
    expect(mockCountSchedules).toBeCalledWith(DEFAULT_FIND_OPTIONS)
    expect(result).toBe(1);
  });
});

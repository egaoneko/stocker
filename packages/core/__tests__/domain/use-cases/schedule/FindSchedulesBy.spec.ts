import { async } from 'rxjs/internal/scheduler/async';
import { queue } from 'rxjs/internal/scheduler/queue';
import { apply } from '../../../../src/utils/common';
import mockScheduleRepository, {
  mockFindSchedulesBy,
} from '../../../../__mocks__/schedule/ScheduleRepository';
import FindSchedulesBy from '../../../../src/domain/use-cases/schedule/FindSchedulesBy';
import Schedule from '../../../../src/domain/entities/schedule/Schedule';
import { DEFAULT_FIND_OPTIONS } from '../../../../__mocks__/constant';

describe('FindSchedulesBy UseCase', () => {
  beforeEach(() => {
    mockScheduleRepository.mockClear();
    mockFindSchedulesBy.mockClear();
  });

  test('FindSchedulesBy is called', async() => {
    const repository = new mockScheduleRepository();
    const useCase: FindSchedulesBy = new FindSchedulesBy(repository);

    const results: Schedule[] = await apply(useCase, (it: FindSchedulesBy) => it.options = DEFAULT_FIND_OPTIONS)
      .runOnce(async, queue)
      .toPromise();
    expect(mockFindSchedulesBy).toHaveBeenCalledTimes(1);
    expect(mockFindSchedulesBy).toBeCalledWith(DEFAULT_FIND_OPTIONS)
    expect(results.length).toBe(1);
  });
});

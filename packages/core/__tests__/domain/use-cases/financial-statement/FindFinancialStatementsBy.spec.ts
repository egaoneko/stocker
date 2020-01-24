import { async } from 'rxjs/internal/scheduler/async';
import { queue } from 'rxjs/internal/scheduler/queue';
import { apply } from '../../../../src/utils/common';
import mockFinancialStatementRepository, {
  mockFindFinancialStatementsBy,
} from '../../../../__mocks__/financial-statement/FinancialStatementRepository';
import FindFinancialStatementsBy from '../../../../src/domain/use-cases/financial-statement/FindFinancialStatementsBy';
import FinancialStatement from '../../../../src/domain/entities/financial-statement/FinancialStatement';
import { DEFAULT_FIND_OPTIONS } from '../../../../__mocks__/constant';

describe('FindFinancialStatementsBy UseCase', () => {
  beforeEach(() => {
    mockFinancialStatementRepository.mockClear();
    mockFindFinancialStatementsBy.mockClear();
  });

  test('FindFinancialStatementsBy is called', async() => {
    const repository = new mockFinancialStatementRepository();
    const useCase: FindFinancialStatementsBy = new FindFinancialStatementsBy(repository);

    const results: FinancialStatement[] = await apply(useCase, (it: FindFinancialStatementsBy) => it.options = DEFAULT_FIND_OPTIONS)
      .runOnce(async, queue)
      .toPromise();
    expect(mockFindFinancialStatementsBy).toHaveBeenCalledTimes(1);
    expect(mockFindFinancialStatementsBy).toBeCalledWith(DEFAULT_FIND_OPTIONS);
    expect(results.length).toBe(1);
  });
});

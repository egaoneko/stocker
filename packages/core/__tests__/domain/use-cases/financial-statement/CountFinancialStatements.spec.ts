import { async } from 'rxjs/internal/scheduler/async';
import { queue } from 'rxjs/internal/scheduler/queue';
import { apply } from '../../../../src/utils/common';
import mockFinancialStatementRepository, {
  mockCountFinancialStatements,
} from '../../../../__mocks__/financial-statement/FinancialStatementRepository';
import CountFinancialStatements from '../../../../src/domain/use-cases/financial-statement/CountFinancialStatements';
import FinancialStatement from '../../../../src/domain/entities/financial-statement/FinancialStatement';
import { DEFAULT_FIND_OPTIONS } from '../../../../__mocks__/constant';

describe('CountFinancialStatements UseCase', () => {
  beforeEach(() => {
    mockFinancialStatementRepository.mockClear();
    mockCountFinancialStatements.mockClear();
  });

  test('CountFinancialStatements is called', async() => {
    const repository = new mockFinancialStatementRepository();
    const useCase: CountFinancialStatements = new CountFinancialStatements(repository);

    const result: number = await apply(useCase, (it: CountFinancialStatements) => it.options = DEFAULT_FIND_OPTIONS)
      .runOnce(async, queue)
      .toPromise();
    expect(mockCountFinancialStatements).toHaveBeenCalledTimes(1);
    expect(mockCountFinancialStatements).toBeCalledWith(DEFAULT_FIND_OPTIONS);
    expect(result).toBe(1);
  });
});

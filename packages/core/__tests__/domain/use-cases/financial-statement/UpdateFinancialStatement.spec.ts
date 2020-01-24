import { async } from 'rxjs/internal/scheduler/async';
import { queue } from 'rxjs/internal/scheduler/queue';
import { apply } from '../../../../src/utils/common';
import mockFinancialStatementRepository, {
  mockUpdateFinancialStatement,
} from '../../../../__mocks__/financial-statement/FinancialStatementRepository';
import UpdateFinancialStatement from '../../../../src/domain/use-cases/financial-statement/UpdateFinancialStatement';
import FinancialStatement from '../../../../src/domain/entities/financial-statement/FinancialStatement';
import { DEFAULT_ID } from '../../../../__mocks__/constant';
import { DEFAULT_FINANCIAL_STATEMENT } from '../../../../__mocks__/financial-statement/constant';

describe('UpdateFinancialStatement UseCase', () => {
  beforeEach(() => {
    mockFinancialStatementRepository.mockClear();
    mockUpdateFinancialStatement.mockClear();
  });

  test('UpdateFinancialStatement is called', async() => {
    const repository = new mockFinancialStatementRepository();
    const useCase: UpdateFinancialStatement = new UpdateFinancialStatement(repository);

    const result: [FinancialStatement, boolean] = await apply(useCase, (it: UpdateFinancialStatement) => it.financialStatement = DEFAULT_FINANCIAL_STATEMENT)
      .runOnce(async, queue)
      .toPromise();
    expect(mockUpdateFinancialStatement).toHaveBeenCalledTimes(1);
    expect(mockUpdateFinancialStatement).toBeCalledWith(DEFAULT_FINANCIAL_STATEMENT);
  });

  test('throw exception without entity', () => {
    const repository = new mockFinancialStatementRepository();
    const useCase: UpdateFinancialStatement = new UpdateFinancialStatement(repository);

    expect(() => {
      apply(useCase, () => {})
        .runOnce(async, queue)
    }).toThrowError('Invalid params in UseCase');
  });

  test('throw exception with invalid stockItemId', () => {
    const repository = new mockFinancialStatementRepository();
    const useCase: UpdateFinancialStatement = new UpdateFinancialStatement(repository);
    const financialStatement: FinancialStatement = new FinancialStatement(DEFAULT_ID);
    (financialStatement as any).stockItemId = null;
    financialStatement.id = DEFAULT_ID;

    expect(() => {
      apply(useCase, ((it: UpdateFinancialStatement) => it.financialStatement = financialStatement))
        .runOnce(async, queue)
    }).toThrowError('Invalid params in UseCase');
  });
});

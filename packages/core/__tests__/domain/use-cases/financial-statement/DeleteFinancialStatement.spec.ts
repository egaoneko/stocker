import { async } from 'rxjs/internal/scheduler/async';
import { queue } from 'rxjs/internal/scheduler/queue';
import { apply } from '../../../../src/utils/common';
import mockFinancialStatementRepository, {
  mockDeleteFinancialStatement,
} from '../../../../__mocks__/financial-statement/FinancialStatementRepository';
import DeleteFinancialStatement from '../../../../src/domain/use-cases/financial-statement/DeleteFinancialStatement';
import FinancialStatement from '../../../../src/domain/entities/financial-statement/FinancialStatement';
import { DEFAULT_ID } from '../../../../__mocks__/constant';
import { DEFAULT_FINANCIAL_STATEMENT } from '../../../../__mocks__/financial-statement/constant';

describe('DeleteFinancialStatement UseCase', () => {
  beforeEach(() => {
    mockFinancialStatementRepository.mockClear();
    mockDeleteFinancialStatement.mockClear();
  });

  test('DeleteFinancialStatement is called', async() => {
    const repository = new mockFinancialStatementRepository();
    const useCase: DeleteFinancialStatement = new DeleteFinancialStatement(repository);

    const result: [FinancialStatement, boolean] = await apply(useCase, (it: DeleteFinancialStatement) => it.financialStatement = DEFAULT_FINANCIAL_STATEMENT)
      .runOnce(async, queue)
      .toPromise();
    expect(mockDeleteFinancialStatement).toHaveBeenCalledTimes(1);
    expect(mockDeleteFinancialStatement).toBeCalledWith(DEFAULT_FINANCIAL_STATEMENT);
  });

  test('throw exception without entity', () => {
    const repository = new mockFinancialStatementRepository();
    const useCase: DeleteFinancialStatement = new DeleteFinancialStatement(repository);

    expect(() => {
      apply(useCase, () => {})
        .runOnce(async, queue)
    }).toThrowError('Invalid params in UseCase');
  });

  test('throw exception with invalid stockItemId', () => {
    const repository = new mockFinancialStatementRepository();
    const useCase: DeleteFinancialStatement = new DeleteFinancialStatement(repository);
    const financialStatement: FinancialStatement = new FinancialStatement(DEFAULT_ID);
    (financialStatement as any).stockItemId = null;
    financialStatement.id = DEFAULT_ID;

    expect(() => {
      apply(useCase, ((it: DeleteFinancialStatement) => it.financialStatement = financialStatement))
        .runOnce(async, queue)
    }).toThrowError('Invalid params in UseCase');
  });
});

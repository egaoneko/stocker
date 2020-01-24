import { async } from 'rxjs/internal/scheduler/async';
import { queue } from 'rxjs/internal/scheduler/queue';
import { apply } from '../../../../src/utils/common';
import mockFinancialStatementRepository, {
  mockCreateFinancialStatement,
} from '../../../../__mocks__/financial-statement/FinancialStatementRepository';
import CreateFinancialStatement from '../../../../src/domain/use-cases/financial-statement/CreateFinancialStatement';
import FinancialStatement from '../../../../src/domain/entities/financial-statement/FinancialStatement';
import { DEFAULT_FINANCIAL_STATEMENT } from '../../../../__mocks__/financial-statement/constant';
import { DEFAULT_ID } from '../../../../__mocks__/constant';

describe('CreateFinancialStatement UseCase', () => {
  beforeEach(() => {
    mockFinancialStatementRepository.mockClear();
    mockCreateFinancialStatement.mockClear();
  });

  test('CreateFinancialStatement is called', async() => {
    const repository = new mockFinancialStatementRepository();
    const useCase: CreateFinancialStatement = new CreateFinancialStatement(repository);

    const result: [FinancialStatement, boolean] = await apply(useCase, (it: CreateFinancialStatement) => it.financialStatement = DEFAULT_FINANCIAL_STATEMENT)
      .runOnce(async, queue)
      .toPromise();
    expect(mockCreateFinancialStatement).toHaveBeenCalledTimes(1);
    expect(mockCreateFinancialStatement).toBeCalledWith(DEFAULT_FINANCIAL_STATEMENT);
  });

  test('throw exception without entity', () => {
    const repository = new mockFinancialStatementRepository();
    const useCase: CreateFinancialStatement = new CreateFinancialStatement(repository);

    expect(() => {
      apply(useCase, () => {})
        .runOnce(async, queue)
    }).toThrowError('Invalid params in UseCase');
  });

  test('throw exception with invalid stockItemId', () => {
    const repository = new mockFinancialStatementRepository();
    const useCase: CreateFinancialStatement = new CreateFinancialStatement(repository);
    const financialStatement: FinancialStatement = new FinancialStatement(DEFAULT_ID);
    (financialStatement as any).stockItemId = null;

    expect(() => {
      apply(useCase, ((it: CreateFinancialStatement) => it.financialStatement = financialStatement))
        .runOnce(async, queue)
    }).toThrowError('Invalid params in UseCase');
  });
});

import { async } from 'rxjs/internal/scheduler/async';
import { queue } from 'rxjs/internal/scheduler/queue';
import { apply } from '../../../../src/utils/common';
import mockFinancialStatementRepository, {
  mockCrawlFinancialStatement,
} from '../../../../__mocks__/financial-statement/FinancialStatementRepository';
import CrawlFinancialStatement from '../../../../src/domain/use-cases/financial-statement/CrawlFinancialStatement';
import { DEFAULT_STOCK_ITEM } from '../../../../__mocks__/stock-item/constant';

describe('CrawlFinancialStatement UseCase', () => {
  beforeEach(() => {
    mockFinancialStatementRepository.mockClear();
    mockCrawlFinancialStatement.mockClear();
  });

  test('CrawlFinancialStatement is called', async() => {
    const repository = new mockFinancialStatementRepository();
    const useCase: CrawlFinancialStatement = new CrawlFinancialStatement(repository);
    const result: any = await apply(useCase, (it: CrawlFinancialStatement) => it.stockItem = DEFAULT_STOCK_ITEM)
      .runOnce(async, queue)
      .toPromise();
    expect(mockCrawlFinancialStatement).toHaveBeenCalledTimes(1);
    expect(mockCrawlFinancialStatement).toBeCalledWith(DEFAULT_STOCK_ITEM)
  });

  test('throw exception without stockItem', () => {
    const repository = new mockFinancialStatementRepository();
    const useCase: CrawlFinancialStatement = new CrawlFinancialStatement(repository);

    expect(() => {
      apply(useCase, () => {})
        .runOnce(async, queue)
    }).toThrowError('Invalid params in UseCase');
  });
});

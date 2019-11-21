import { async } from 'rxjs/internal/scheduler/async';
import CrawlStockItems from '../../../../src/domain/use-cases/stock-item/CrawlStockItems';
import mockNaverStockItemRepository, { mockCrawlStockItems } from '../../../../__mocks__/stock-item/StockItemRepository';
import { KOSPI } from '../../../../src/constant/market';
import { queue } from 'rxjs/internal/scheduler/queue';

describe('CrawlStockItems UseCase', () => {
  beforeEach(() => {
    mockNaverStockItemRepository.mockClear();
    mockCrawlStockItems.mockClear();
  });

  test('crawlStockItems is called', () => {
    const repository = new mockNaverStockItemRepository();
    const useCase: CrawlStockItems = new CrawlStockItems(repository);
    useCase.market = KOSPI;
    useCase.run(async, queue);
    expect(mockCrawlStockItems).toHaveBeenCalledTimes(1);
  });

  test('throw exception with empty market', () => {
    const repository = new mockNaverStockItemRepository();
    const useCase: CrawlStockItems = new CrawlStockItems(repository);
    expect(() => {useCase.run(async, queue)}).toThrowError('Invalid params in UseCase');
  });
});

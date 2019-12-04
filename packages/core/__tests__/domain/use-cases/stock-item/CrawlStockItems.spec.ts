import { async } from 'rxjs/internal/scheduler/async';
import CrawlStockItems from '../../../../src/domain/use-cases/stock-item/CrawlStockItems';
import mockStockItemRepository, { mockCrawlStockItems } from '../../../../__mocks__/stock-item/StockItemRepository';
import { queue } from 'rxjs/internal/scheduler/queue';

describe('CrawlStockItems UseCase', () => {
  beforeEach(() => {
    mockStockItemRepository.mockClear();
    mockCrawlStockItems.mockClear();
  });

  test('crawlStockItems is called', () => {
    const repository = new mockStockItemRepository();
    const useCase: CrawlStockItems = new CrawlStockItems(repository);
    useCase.runOnce(async, queue);
    expect(mockCrawlStockItems).toHaveBeenCalledTimes(1);
  });
});

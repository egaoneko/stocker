import { async } from 'rxjs/internal/scheduler/async';
import CrawlStockItems from '../../../../src/domain/use-cases/stock-item/CrawlStockItems';
import mockNaverStockItemRepository, { mockCrawlStockItems } from '../../../../__mocks__/NaverStockItemRepository';
import { KOSPI } from '../../../../lib/constant/market';
import { queue } from 'rxjs/internal/scheduler/queue';

describe('CrawlStockItems', () => {
  beforeEach(() => {
    mockNaverStockItemRepository.mockClear();
    mockCrawlStockItems.mockClear();
  });

  test('crawlStockItems is called', () => {
    const repository = new mockNaverStockItemRepository();
    const useCase: CrawlStockItems = new CrawlStockItems(repository);
    useCase.page = 1;
    useCase.market = KOSPI;
    useCase.run(async, queue);
    expect(mockCrawlStockItems).toHaveBeenCalledTimes(1);
  });

  test('crawlStockItems is called with empty page', () => {
    const repository = new mockNaverStockItemRepository();
    const useCase: CrawlStockItems = new CrawlStockItems(repository);
    useCase.market = KOSPI;
    useCase.run(async, queue);
    expect(mockCrawlStockItems).toHaveBeenCalledTimes(1);
  });

  test('throw exception with invalid page', () => {
    const repository = new mockNaverStockItemRepository();
    const useCase: CrawlStockItems = new CrawlStockItems(repository);
    useCase.page = 0;
    useCase.market = KOSPI;
    expect(() => {useCase.run(async, queue)}).toThrowError('Invalid params in UseCase');
  });

  test('throw exception with empty market', () => {
    const repository = new mockNaverStockItemRepository();
    const useCase: CrawlStockItems = new CrawlStockItems(repository);
    useCase.page = 1;
    expect(() => {useCase.run(async, queue)}).toThrowError('Invalid params in UseCase');
  });
});

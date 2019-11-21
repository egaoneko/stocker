import { async } from 'rxjs/internal/scheduler/async';
import { queue } from 'rxjs/internal/scheduler/queue';
import CrawlLastBusinessDay from '../../../../src/domain/use-cases/stock/CrawlLastBusinessDay';
import mockNaverStockRepository, { mockCrawlLastBusinessDay } from '../../../../__mocks__/stock/StockItemRepository';

describe('CrawlLastBusinessDay UseCase', () => {
  beforeEach(() => {
    mockNaverStockRepository.mockClear();
    mockCrawlLastBusinessDay.mockClear();
  });

  test('crawlLastBusinessDay is called', () => {
    const repository = new mockNaverStockRepository();
    const useCase: CrawlLastBusinessDay = new CrawlLastBusinessDay(repository);
    useCase.run(async, queue);
    expect(mockCrawlLastBusinessDay).toHaveBeenCalledTimes(1);
  });
});

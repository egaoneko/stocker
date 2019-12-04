import { async } from 'rxjs/internal/scheduler/async';
import { queue } from 'rxjs/internal/scheduler/queue';
import CrawlLastBusinessDay from '../../../../src/domain/use-cases/stock/CrawlLastBusinessDay';
import mockStockRepository, { mockCrawlLastBusinessDay } from '../../../../__mocks__/stock/StockRepository';

describe('CrawlLastBusinessDay UseCase', () => {
  beforeEach(() => {
    mockStockRepository.mockClear();
    mockCrawlLastBusinessDay.mockClear();
  });

  test('crawlLastBusinessDay is called', () => {
    const repository = new mockStockRepository();
    const useCase: CrawlLastBusinessDay = new CrawlLastBusinessDay(repository);
    useCase.runOnce(async, queue);
    expect(mockCrawlLastBusinessDay).toHaveBeenCalledTimes(1);
  });
});

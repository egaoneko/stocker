import { async } from 'rxjs/internal/scheduler/async';
import CrawlTotalPage from '../../../../src/domain/use-cases/stock-item/CrawlTotalPage';
import mockNaverStockItemRepository, { mockCrawlTotalPage } from '../../../../__mocks__/NaverStockItemRepository';
import { KOSPI } from '../../../../src/constant/market';
import { queue } from 'rxjs/internal/scheduler/queue';

describe('CrawlTotalPage UseCase', () => {
  beforeEach(() => {
    mockNaverStockItemRepository.mockClear();
    mockCrawlTotalPage.mockClear();
  });

  test('crawlTotalPage is called', () => {
    const repository = new mockNaverStockItemRepository();
    const useCase: CrawlTotalPage = new CrawlTotalPage(repository);
    useCase.market = KOSPI;
    useCase.run(async, queue);
    expect(mockCrawlTotalPage).toHaveBeenCalledTimes(1);
  });

  test('throw crawlTotalPage with empty market', () => {
    const repository = new mockNaverStockItemRepository();
    const useCase: CrawlTotalPage = new CrawlTotalPage(repository);
    expect(() => {useCase.run(async, queue)}).toThrowError('Invalid params in UseCase');
  });
});

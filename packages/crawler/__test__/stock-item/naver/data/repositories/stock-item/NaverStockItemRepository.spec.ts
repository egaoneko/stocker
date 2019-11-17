import {
  KOSPI,
} from '../../../../../../src/stock-item/naver/constant';
import NaverStockItemRepository
  from '../../../../../../src/stock-item/naver/data/repositories/stock-item/NaverStockItemRepository';
import mockNaverApiProvider, {
  mockCrawlTotalPage,
  mockCrawlStockItemsByPage
} from '../../../../../../__mocks__/NaverApiProivider';
import StockItem from '@stocker/core/lib/domain/entities/stock-item/StockItem';

describe('NaverStockItemRepository', () => {
  const repository: NaverStockItemRepository = new NaverStockItemRepository((new mockNaverApiProvider()) as any);

  test('crawlStockItems', (done) => {
    repository.crawlStockItems(KOSPI)
      .subscribe((items: StockItem[]) => {
        expect(mockCrawlTotalPage).toHaveBeenCalledTimes(1);
        expect(mockCrawlTotalPage).toBeCalledWith(KOSPI);
        expect(mockCrawlStockItemsByPage).toHaveBeenCalledTimes(32);
        expect(items.length).toBe(32);
        done();
      });
  });
});

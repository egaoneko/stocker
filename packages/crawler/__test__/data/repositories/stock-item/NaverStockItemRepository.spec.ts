import NaverStockItemRepository
  from '../../../../src/data/repositories/stock-item/NaverStockItemRepository';
import mockNaverStockItemProvider, {
  mockCrawlTotalPage,
  mockCrawlStockItemsByPage
} from '../../../../__mocks__/stock-item/NaverStockItemProivider';
import StockItem from '@stocker/core/lib/domain/entities/stock-item/StockItem';
import { NaverKOSPI } from '../../../../src/stock-item/constant';

describe('NaverStockItemRepository', () => {
  const repository: NaverStockItemRepository = new NaverStockItemRepository((new mockNaverStockItemProvider()) as any);

  test('crawlStockItems', (done) => {
    repository.crawlStockItems(NaverKOSPI)
      .subscribe((items: StockItem[]) => {
        expect(mockCrawlTotalPage).toHaveBeenCalledTimes(1);
        expect(mockCrawlTotalPage).toBeCalledWith(NaverKOSPI);
        expect(mockCrawlStockItemsByPage).toHaveBeenCalledTimes(32);
        expect(items.length).toBe(32);
        done();
      });
  });
});

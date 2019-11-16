import {
  KOSPI,
} from '../../../../../../src/stock-item/naver/constant';
import NaverStockItemRepository
  from '../../../../../../src/stock-item/naver/data/repositories/stock-item/NaverStockItemRepository';
import mockNaverApiProvider, { mockCrawlStockItems, mockCrawlTotalPage } from '../../../../../../__mocks__/NaverApiProivider';

describe('NaverStockItemRepository', () => {
  const repository: NaverStockItemRepository = new NaverStockItemRepository((new mockNaverApiProvider()) as any);

  test('crawlTotalPage', () => {
    repository.crawlTotalPage(KOSPI);
    expect(mockCrawlTotalPage).toHaveBeenCalledTimes(1);
    expect(mockCrawlTotalPage).toBeCalledWith(KOSPI);
  });

  test('crawlStockItems', () => {
    repository.crawlStockItems(KOSPI, 1);
    expect(mockCrawlStockItems).toHaveBeenCalledTimes(1);
    expect(mockCrawlStockItems).toBeCalledWith(KOSPI, 1);
  });
});

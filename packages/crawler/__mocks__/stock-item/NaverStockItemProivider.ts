import { of } from 'rxjs';
import StockItem from '@stocker/core/lib/domain/entities/stock-item/StockItem';
import Market from '@stocker/core/lib/domain/entities/market/Market';
import { NaverKOSPI } from '../../src/stock-item/constant';

export const mockCrawlTotalPage = jest.fn().mockImplementation(() => {
  return of(32);
});

export const mockCrawlStockItemsByPage = jest.fn().mockImplementation((market: Market, page: number) => {
  return of([
    new StockItem(page.toString(), 'Test' + page, NaverKOSPI),
  ]);
});

const mockNaverStockItemProvider = jest.fn().mockImplementation(() => {
  return {
    crawlTotalPage: mockCrawlTotalPage,
    crawlStockItemsByPage: mockCrawlStockItemsByPage,
  };
});

export default mockNaverStockItemProvider;
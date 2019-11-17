import { of } from 'rxjs';
import { KOSPI } from '../src/stock-item/naver/constant';
import StockItem from '@stocker/core/lib/domain/entities/stock-item/StockItem';
import Market from '@stocker/core/lib/domain/entities/market/Market';

export const mockCrawlTotalPage = jest.fn().mockImplementation(() => {
  return of(32);
});

export const mockCrawlStockItemsByPage = jest.fn().mockImplementation((market: Market, page: number) => {
  return of([
    new StockItem(page.toString(), 'Test' + page, KOSPI),
  ]);
});

const mockNaverApiProvider = jest.fn().mockImplementation(() => {
  return {
    crawlTotalPage: mockCrawlTotalPage,
    crawlStockItemsByPage: mockCrawlStockItemsByPage,
  };
});

export default mockNaverApiProvider;
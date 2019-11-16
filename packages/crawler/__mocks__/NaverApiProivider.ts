import { of } from 'rxjs';
import { KOSPI } from '../src/stock-item/naver/constant';
import StockItem from '@stocker/core/lib/domain/entities/stock-item/StockItem';

export const mockCrawlStockItems = jest.fn().mockImplementation(() => {
  return of([
    new StockItem('0000', 'Test1', KOSPI),
    new StockItem('0000', 'Test2', KOSPI),
  ]);
});

export const mockCrawlTotalPage = jest.fn().mockImplementation(() => {
  return of(32);
});

const mockNaverApiProvider = jest.fn().mockImplementation(() => {
  return {
    crawlStockItems: mockCrawlStockItems,
    crawlTotalPage: mockCrawlTotalPage
  };
});

export default mockNaverApiProvider;
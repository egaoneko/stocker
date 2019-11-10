import { of } from 'rxjs';
import StockItem from '../src/domain/entities/stock-item/StockItem';
import { KOSPI } from '../lib/constant/market';

export const mockCrawlStockItems = jest.fn().mockImplementation(() => {
  return of([
    new StockItem('0000', 'Test1', KOSPI),
    new StockItem('0000', 'Test2', KOSPI),
  ]);
});

export const mockCrawlTotalPage = jest.fn().mockImplementation(() => {
  return of(3);
});

const mockNaverStockItemRepository = jest.fn().mockImplementation(() => {
  return {
    crawlStockItems: mockCrawlStockItems,
    crawlTotalPage: mockCrawlTotalPage
  };
});

export default mockNaverStockItemRepository;
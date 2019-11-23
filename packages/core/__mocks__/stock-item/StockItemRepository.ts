import { of } from 'rxjs';
import StockItem from '../../src/domain/entities/stock-item/StockItem';
import { KOSPI } from '../../lib/constant/market';

export const mockCrawlStockItems = jest.fn().mockImplementation(() => {
  return of([
    new StockItem(KOSPI, '0000', 'Test1'),
    new StockItem(KOSPI, '0000', 'Test2'),
  ]);
});

const mockStockItemRepository = jest.fn().mockImplementation(() => {
  return {
    crawlStockItems: mockCrawlStockItems,
  };
});

export default mockStockItemRepository;
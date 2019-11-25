import {
  Observable,
  of
} from 'rxjs';
import StockItem from '../../src/domain/entities/stock-item/StockItem';

export const mockCrawlStockItems = jest.fn().mockImplementation((): Observable<StockItem[]> => {
  return of([
    new StockItem('0000', 'Test1'),
    new StockItem('0000', 'Test2'),
  ]);
});

const mockStockItemRepository = jest.fn().mockImplementation(() => {
  return {
    crawlStockItems: mockCrawlStockItems,
  };
});

export default mockStockItemRepository;
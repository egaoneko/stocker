import Market from '@stocker/core/lib/domain/entities/market/Market';
import { of } from 'rxjs';
import StockItem from '@stocker/core/lib/domain/entities/stock-item/StockItem';
import { KOSPI } from '@stocker/core/lib/constant/market';

export const mockCrawlStockItems = jest.fn().mockImplementation((market: Market) => {
  return of([
    new StockItem(KOSPI, '0', 'Test1'),
    new StockItem(KOSPI, '1', 'Test2'),
    new StockItem(KOSPI, '2', 'Test3'),
  ]);
});

const mockKrxStockItemProvider = jest.fn().mockImplementation(() => {
  return {
    crawlStockItems: mockCrawlStockItems
  };
});

export default mockKrxStockItemProvider;
import Market from '@stocker/core/lib/domain/entities/market/Market';
import { of } from 'rxjs';
import StockItem from '@stocker/core/lib/domain/entities/stock-item/StockItem';
import { KOSPI } from '../../src/stock-item/krx/constant';

export const mockCrawlStockItems = jest.fn().mockImplementation((market: Market) => {
  return of([
    new StockItem('0', 'Test1', KOSPI),
    new StockItem('1', 'Test2', KOSPI),
    new StockItem('2', 'Test3', KOSPI),
  ]);
});

const mockKrxStockItemProvider = jest.fn().mockImplementation(() => {
  return {
    crawlStockItems: mockCrawlStockItems
  };
});

export default mockKrxStockItemProvider;
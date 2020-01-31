import { of } from 'rxjs';
import StockItem from '@stocker/core/lib/domain/entities/stock-item/StockItem';

export const mockDartCrawlStockItems = jest.fn().mockImplementation(() => {
  const item1: StockItem = new StockItem('096770', 'SK이노베이션');
  item1.corpCode = '00631518';
  const item2: StockItem = new StockItem('067630', '에이치엘비생명과학');
  item2.corpCode = '00365590';

  return of([
    item1,
    item2,
  ]);
});

const mockDartStockItemProvider = jest.fn().mockImplementation(() => {
  return {
    crawlStockItems: mockDartCrawlStockItems
  };
});

export default mockDartStockItemProvider;
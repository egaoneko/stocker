import { of } from 'rxjs';
import StockItem from '@stocker/core/lib/domain/entities/stock-item/StockItem';
import {
  KOSPI,
  KOSDAQ
} from '@stocker/core/lib/constant/market';

export const mockWiseCrawlStockItems = jest.fn().mockImplementation(() => {
  const item1: StockItem = new StockItem('096770', 'SK이노베이션');
  item1.market = KOSPI;
  item1.wics = '에너지';
  const item2: StockItem = new StockItem('067630', '에이치엘비생명과학');
  item2.market = KOSDAQ;
  item2.wics = '에너지';

  return of([
    item1,
    item2,
  ]);
});

const mockWiseStockItemProvider = jest.fn().mockImplementation(() => {
  return {
    crawlStockItems: mockWiseCrawlStockItems
  };
});

export default mockWiseStockItemProvider;
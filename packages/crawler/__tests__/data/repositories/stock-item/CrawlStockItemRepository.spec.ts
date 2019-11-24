import mockKrxStockItemProvider, { mockKrxCrawlStockItems } from '../../../../__mocks__/stock-item/KrxStockItemProivider';
import mockWiseStockItemProvider, { mockWiseCrawlStockItems } from '../../../../__mocks__/stock-item/WiseStockItemProivider';
import StockItem from '@stocker/core/lib/domain/entities/stock-item/StockItem';
import CrawlStockItemRepository from '../../../../src/data/repositories/stock-item/CrawlStockItemRepository';
import {
  KOSDAQ,
  KOSPI
} from '@stocker/core/lib/constant/market';

describe('CrawlStockItemRepository', () => {
  const repository: CrawlStockItemRepository = new CrawlStockItemRepository(
    (new mockKrxStockItemProvider()) as any,
    (new mockWiseStockItemProvider()) as any,
  );

  test('crawlStockItems', (done) => {
    repository.crawlStockItems()
      .subscribe((items: StockItem[]) => {
        expect(mockKrxCrawlStockItems).toHaveBeenCalledTimes(1);
        expect(mockWiseCrawlStockItems).toHaveBeenCalledTimes(1);
        expect(items.length).toBe(2);

        expect(items[0].code).toBe('096770');
        expect(items[0].name).toBe('SK이노베이션');
        expect(items[0].market).toBe(KOSPI);
        expect(items[0].gics).toBe('화학');
        expect(items[0].wics).toBe('에너지');

        expect(items[1].code).toBe('067630');
        expect(items[1].name).toBe('에이치엘비생명과학');
        expect(items[1].market).toBe(KOSDAQ);
        expect(items[1].gics).toBe('기타서비스');
        expect(items[1].wics).toBe('에너지');
        done();
      });
  });
});

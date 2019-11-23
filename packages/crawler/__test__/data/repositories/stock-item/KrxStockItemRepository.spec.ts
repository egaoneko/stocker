import mockKrxStockItemProvider, { mockCrawlStockItems } from '../../../../__mocks__/stock-item/KrxStockItemProivider';
import StockItem from '@stocker/core/lib/domain/entities/stock-item/StockItem';
import KrxStockItemRepository from '../../../../src/data/repositories/stock-item/KrxStockItemRepository';

describe('KrxStockItemRepository', () => {
  const repository: KrxStockItemRepository = new KrxStockItemRepository((new mockKrxStockItemProvider()) as any);

  test('crawlStockItems', (done) => {
    repository.crawlStockItems()
      .subscribe((items: StockItem[]) => {
        expect(mockCrawlStockItems).toHaveBeenCalledTimes(1);
        expect(items.length).toBe(3);
        done();
      });
  });
});

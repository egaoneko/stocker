import mockKrxStockItemProvider, { mockCrawlStockItems } from '../../../../__mocks__/stock-item/KrxStockItemProivider';
import StockItem from '@stocker/core/lib/domain/entities/stock-item/StockItem';
import KrxStockItemRepository from '../../../../src/data/repositories/stock-item/KrxStockItemRepository';
import { KrxKOSPI } from '../../../../src/stock-item/constant';

describe('KrxStockItemRepository', () => {
  const repository: KrxStockItemRepository = new KrxStockItemRepository((new mockKrxStockItemProvider()) as any);

  test('crawlStockItems', (done) => {
    repository.crawlStockItems(KrxKOSPI)
      .subscribe((items: StockItem[]) => {
        expect(mockCrawlStockItems).toHaveBeenCalledTimes(1);
        expect(mockCrawlStockItems).toBeCalledWith(KrxKOSPI);
        expect(items.length).toBe(3);
        done();
      });
  });
});

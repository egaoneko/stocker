import mockKrxStockItemProvider from '../../../../../../__mocks__/KrxStockItemProivider';
import StockItem from '@stocker/core/lib/domain/entities/stock-item/StockItem';
import KrxStockItemRepository from '../../../../../../src/stock-item/krx/data/repositories/KrxStockItemRepository';
import { KOSPI } from '../../../../../../src/stock-item/krx/constant';

describe('KrxStockItemRepository', () => {
  const repository: KrxStockItemRepository = new KrxStockItemRepository((new mockKrxStockItemProvider()) as any);

  test('crawlStockItems', (done) => {
    repository.crawlStockItems(KOSPI)
      .subscribe((items: StockItem[]) => {
        done();
      });
  });
});

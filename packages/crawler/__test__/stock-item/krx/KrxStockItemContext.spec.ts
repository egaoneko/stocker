import CrawlStockItems from '@stocker/core/lib/domain/use-cases/stock-item/CrawlStockItems';
import KrxStockItemContext from '../../../src/stock-item/krx/KrxStockItemContext';
import KrxStockItemProvider from '../../../src/stock-item/krx/data/http/providers/KrxStockItemProvider';
import KrxStockItemRepository from '../../../src/stock-item/krx/data/repositories/KrxStockItemRepository';

describe('KrxStockItemContext', () => {
  test('constructor', () => {
    const axiosInstance: any = {};
    const application: KrxStockItemContext = new KrxStockItemContext(axiosInstance);
    expect((application as any).axiosInstance).toBe(axiosInstance);
    expect((application as any).providers.stockItem).toBeInstanceOf(KrxStockItemProvider);
    expect((application as any).repositories.stockItem).toBeInstanceOf(KrxStockItemRepository);
    expect((application as any).useCases.crawlStockItems).toBeInstanceOf(CrawlStockItems);
  });
});

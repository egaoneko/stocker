import CrawlStockItems from '@stocker/core/lib/domain/use-cases/stock-item/CrawlStockItems';
import StockItemContext from '../../src/stock-item/StockItemContext';
import KrxStockItemProvider from '../../src/data/http/providers/stock-item/KrxStockItemProvider';
import CrawlStockItemRepository from '../../src/data/repositories/stock-item/CrawlStockItemRepository';
import WiseStockItemProvider from '../../src/data/http/providers/stock-item/WiseStockItemProvider';

describe('StockItemContext', () => {
  test('constructor', () => {
    const axiosInstance: any = {};
    const application: StockItemContext = new StockItemContext(axiosInstance);
    expect((application as any).axiosInstance).toBe(axiosInstance);
    expect((application as any).providers.krxStockItem).toBeInstanceOf(KrxStockItemProvider);
    expect((application as any).providers.wiseStockItem).toBeInstanceOf(WiseStockItemProvider);
    expect((application as any).repositories.crawlStockItem).toBeInstanceOf(CrawlStockItemRepository);
    expect((application as any).useCases.crawlStockItems).toBeInstanceOf(CrawlStockItems);
  });
});

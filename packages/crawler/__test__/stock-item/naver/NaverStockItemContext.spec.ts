import NaverStockItemContext from '../../../src/stock-item/naver/NaverStockItemContext';
import NaverStockItemProvider from '../../../src/stock-item/naver/data/http/providers/NaverStockItemProvider';
import NaverStockItemRepository
  from '../../../src/stock-item/naver/data/repositories/stock-item/NaverStockItemRepository';
import CrawlStockItems from '@stocker/core/lib/domain/use-cases/stock-item/CrawlStockItems';

describe('NaverStockItemContext', () => {
  test('constructor', () => {
    const axiosInstance: any = {};
    const application: NaverStockItemContext = new NaverStockItemContext(axiosInstance);
    expect((application as any).axiosInstance).toBe(axiosInstance);
    expect((application as any).providers.stockItem).toBeInstanceOf(NaverStockItemProvider);
    expect((application as any).repositories.stockItem).toBeInstanceOf(NaverStockItemRepository);
    expect((application as any).useCases.crawlStockItems).toBeInstanceOf(CrawlStockItems);
  });
});

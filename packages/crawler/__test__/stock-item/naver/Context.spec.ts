import Context from '../../../src/stock-item/naver/Context';
import NaverApiProvider from '../../../src/stock-item/naver/data/http/provider/NaverApiProvider';
import NaverStockItemRepository
  from '../../../src/stock-item/naver/data/repositories/stock-item/NaverStockItemRepository';
import CrawlStockItems from '@stocker/core/lib/domain/use-cases/stock-item/CrawlStockItems';
import CrawlTotalPage from '@stocker/core/lib/domain/use-cases/stock-item/CrawlTotalPage';

describe('Context', () => {
  test('constructor', () => {
    const axiosInstance: any = {};
    const application: Context = new Context(axiosInstance);
    expect((application as any).naverAxiosInstance).toBe(axiosInstance);
    expect((application as any).apiProviders.naverApi).toBeInstanceOf(NaverApiProvider);
    expect((application as any).repositories.naverStockItem).toBeInstanceOf(NaverStockItemRepository);
    expect((application as any).useCases.crawlStockItems).toBeInstanceOf(CrawlStockItems);
    expect((application as any).useCases.crawlTotalPage).toBeInstanceOf(CrawlTotalPage);
  });
});

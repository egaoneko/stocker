import NaverStockContext from '../../../src/stock/contexts/NaverStockContext';
import NaverStockProvider from '../../../src/data/http/providers/stock/NaverStockProvider';
import NaverStockRepository from '../../../src/data/repositories/stock/NaverStockRepository';
import CrawlLastBusinessDay from '@stocker/core/lib/domain/use-cases/stock/CrawlLastBusinessDay';

describe('NaverStockContext', () => {
  test('constructor', () => {
    const axiosInstance: any = {};
    const application: NaverStockContext = new NaverStockContext(axiosInstance);
    expect((application as any).axiosInstance).toBe(axiosInstance);
    expect((application as any).providers.stock).toBeInstanceOf(NaverStockProvider);
    expect((application as any).repositories.stock).toBeInstanceOf(NaverStockRepository);
    expect((application as any).useCases.crawlLastBusinessDay).toBeInstanceOf(CrawlLastBusinessDay);
  });
});

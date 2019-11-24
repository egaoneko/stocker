import StockContext from '../../src/stock/StockContext';
import NaverStockProvider from '../../src/data/http/providers/stock/NaverStockProvider';
import CrawlStockRepository from '../../src/data/repositories/stock/CrawlStockRepository';
import CrawlLastBusinessDay from '@stocker/core/lib/domain/use-cases/stock/CrawlLastBusinessDay';

describe('StockContext', () => {
  test('constructor', () => {
    const axiosInstance: any = {};
    const application: StockContext = new StockContext(axiosInstance);
    expect((application as any).axiosInstance).toBe(axiosInstance);
    expect((application as any).providers.naverStock).toBeInstanceOf(NaverStockProvider);
    expect((application as any).repositories.crawlStock).toBeInstanceOf(CrawlStockRepository);
    expect((application as any).useCases.crawlLastBusinessDay).toBeInstanceOf(CrawlLastBusinessDay);
  });
});

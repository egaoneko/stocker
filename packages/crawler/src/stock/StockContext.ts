import { AxiosInstance } from 'axios';
import NaverStockProvider from '../data/http/providers/stock/NaverStockProvider';
import CrawlStockRepository from '../data/repositories/stock/CrawlStockRepository';
import CrawlLastBusinessDay from '@stocker/core/lib/domain/use-cases/stock/CrawlLastBusinessDay';

interface ProviderDependencies {
  naverStock: NaverStockProvider;
}

interface RepositoryDependencies {
  crawlStock: CrawlStockRepository;
}

interface UseCaseDependencies {
  crawlLastBusinessDay: CrawlLastBusinessDay;
}

export default class StockContext {
  private axiosInstance: AxiosInstance;
  private providers: ProviderDependencies;
  private repositories: RepositoryDependencies;
  useCases: UseCaseDependencies;

  constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance;
    this.providers = {
      naverStock: new NaverStockProvider(axiosInstance),
    };
    this.repositories = {
      crawlStock: new CrawlStockRepository(this.providers.naverStock),
    };
    this.useCases = {
      crawlLastBusinessDay: new CrawlLastBusinessDay(this.repositories.crawlStock),
    }
  }
}
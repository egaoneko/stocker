import { AxiosInstance } from 'axios';
import NaverStockProvider from '../../data/http/providers/stock/NaverStockProvider';
import NaverStockRepository from '../../data/repositories/stock/NaverStockRepository';
import CrawlLastBusinessDay from '@stocker/core/lib/domain/use-cases/stock/CrawlLastBusinessDay';

interface ProviderDependencies {
  stock: NaverStockProvider;
}

interface RepositoryDependencies {
  stock: NaverStockRepository;
}

interface UseCaseDependencies {
  crawlLastBusinessDay: CrawlLastBusinessDay;
}

export default class NaverStockContext {
  private axiosInstance: AxiosInstance;
  private providers: ProviderDependencies;
  private repositories: RepositoryDependencies;
  useCases: UseCaseDependencies;

  constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance;
    this.providers = {
      stock: new NaverStockProvider(axiosInstance),
    };
    this.repositories = {
      stock: new NaverStockRepository(this.providers.stock),
    };
    this.useCases = {
      crawlLastBusinessDay: new CrawlLastBusinessDay(this.repositories.stock),
    }
  }
}
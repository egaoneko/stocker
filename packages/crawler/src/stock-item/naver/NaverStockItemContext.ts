import { AxiosInstance } from 'axios';
import CrawlStockItems from '@stocker/core/lib/domain/use-cases/stock-item/CrawlStockItems';
import NaverStockItemRepository from './data/repositories/stock-item/NaverStockItemRepository';
import NaverStockItemProvider from './data/http/providers/NaverStockItemProvider';

interface ProviderDependencies {
  stockItem: NaverStockItemProvider;
}

interface RepositoryDependencies {
  stockItem: NaverStockItemRepository;
}

interface UseCaseDependencies {
  crawlStockItems: CrawlStockItems;
}

export default class NaverStockItemContext {
  private axiosInstance: AxiosInstance;
  private providers: ProviderDependencies;
  private repositories: RepositoryDependencies;
  useCases: UseCaseDependencies;

  constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance;
    this.providers = {
      stockItem: new NaverStockItemProvider(axiosInstance),
    };
    this.repositories = {
      stockItem: new NaverStockItemRepository(this.providers.stockItem),
    };
    this.useCases = {
      crawlStockItems: new CrawlStockItems(this.repositories.stockItem),
    }
  }
}
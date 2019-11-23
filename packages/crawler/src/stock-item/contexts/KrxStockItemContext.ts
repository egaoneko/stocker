import { AxiosInstance } from 'axios';
import CrawlStockItems from '@stocker/core/lib/domain/use-cases/stock-item/CrawlStockItems';
import KrxStockItemProvider from '../../data/http/providers/stock-item/KrxStockItemProvider';
import KrxStockItemRepository from '../../data/repositories/stock-item/KrxStockItemRepository';

interface ProviderDependencies {
  stockItem: KrxStockItemProvider;
}

interface RepositoryDependencies {
  stockItem: KrxStockItemRepository;
}

interface UseCaseDependencies {
  crawlStockItems: CrawlStockItems;
}

export default class KrxStockItemContext {
  private axiosInstance: AxiosInstance;
  private providers: ProviderDependencies;
  private repositories: RepositoryDependencies;
  useCases: UseCaseDependencies;

  constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance;
    this.providers = {
      stockItem: new KrxStockItemProvider(axiosInstance),
    };
    this.repositories = {
      stockItem: new KrxStockItemRepository(this.providers.stockItem),
    };
    this.useCases = {
      crawlStockItems: new CrawlStockItems(this.repositories.stockItem),
    }
  }
}
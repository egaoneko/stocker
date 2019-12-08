import { AxiosInstance } from 'axios';
import CrawlStockItems from '@stocker/core/lib/domain/use-cases/stock-item/CrawlStockItems';
import KrxStockItemProvider from '../data/providers/stock-item/KrxStockItemProvider';
import CrawlStockItemRepository from '../data/repositories/stock-item/CrawlStockItemRepository';
import WiseStockItemProvider from '../data/providers/stock-item/WiseStockItemProvider';

interface ProviderDependencies {
  krxStockItem: KrxStockItemProvider;
  wiseStockItem: WiseStockItemProvider;
}

interface RepositoryDependencies {
  crawlStockItem: CrawlStockItemRepository;
}

interface UseCaseDependencies {
  crawlStockItems: CrawlStockItems;
}

export default class StockItemContext {
  private axiosInstance: AxiosInstance;
  private providers: ProviderDependencies;
  private repositories: RepositoryDependencies;
  useCases: UseCaseDependencies;

  constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance;
    this.providers = {
      krxStockItem: new KrxStockItemProvider(axiosInstance),
      wiseStockItem: new WiseStockItemProvider(axiosInstance),
    };
    this.repositories = {
      crawlStockItem: new CrawlStockItemRepository(this.providers.krxStockItem, this.providers.wiseStockItem),
    };
    this.useCases = {
      crawlStockItems: new CrawlStockItems(this.repositories.crawlStockItem),
    }
  }
}
import { AxiosInstance } from 'axios';
import CrawlStockItems from '@stocker/core/lib/domain/use-cases/stock-item/CrawlStockItems';
import CrawlTotalPage from '@stocker/core/lib/domain/use-cases/stock-item/CrawlTotalPage';
import NaverStockItemRepository from './data/repositories/stock-item/NaverStockItemRepository';
import NaverApiProvider from './data/http/provider/NaverApiProvider';

interface ApiProviderDependencies {
  naverApi: NaverApiProvider;
}

interface RepositoryDependencies {
  naverStockItem: NaverStockItemRepository;
}

interface UseCaseDependencies {
  crawlStockItems: CrawlStockItems;
  crawlTotalPage: CrawlTotalPage;
}

export default class Context {
  private naverAxiosInstance: AxiosInstance;
  private apiProviders: ApiProviderDependencies;
  private repositories: RepositoryDependencies;
  useCases: UseCaseDependencies;

  constructor(naverAxiosInstance: AxiosInstance) {
    this.naverAxiosInstance = naverAxiosInstance;
    this.apiProviders = {
      naverApi: new NaverApiProvider(naverAxiosInstance),
    };
    this.repositories = {
      naverStockItem: new NaverStockItemRepository(this.apiProviders.naverApi),
    };
    this.useCases = {
      crawlStockItems: new CrawlStockItems(this.repositories.naverStockItem),
      crawlTotalPage: new CrawlTotalPage(this.repositories.naverStockItem),
    }
  }
}
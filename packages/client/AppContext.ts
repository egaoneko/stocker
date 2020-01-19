import FirebaseUserProvider from './data/providers/account/FirebaseUserProvider';
import UserRepository from './data/repositories/account/UserRepository';
import GetCurrentUser from '@stocker/core/lib/domain/use-cases/account/GetCurrentUser';
import GetCurrentUserToken from '@stocker/core/lib/domain/use-cases/account/GetCurrentUserToken';
import CreateUser from '@stocker/core/lib/domain/use-cases/account/CreateUser';
import { AxiosInstance } from 'axios';
import HttpUserProvider from './data/providers/account/HttpUserProvider';
import HttpStockItemProvider from './data/providers/stock-item/HttpStockItemProvider';
import StockItemRepository from './data/repositories/stock-item/StockItemRepository';
import FindStockItemsBy from '@stocker/core/lib/domain/use-cases/stock-item/FindStockItemsBy';
import CountStockItems from '@stocker/core/lib/domain/use-cases/stock-item/CountStockItems';

interface ProviderDependencies {
  firebaseUser: FirebaseUserProvider;
  httpUser: HttpUserProvider;
  httpStockItem: HttpStockItemProvider;
}

interface RepositoryDependencies {
  user: UserRepository;
  stockItem: StockItemRepository;
}

interface UseCaseDependencies {
  createUser: CreateUser;
  getCurrentUser: GetCurrentUser;
  getCurrentUserToken: GetCurrentUserToken;
  findStockItemsBy: FindStockItemsBy;
  countStockItems: CountStockItems;
}

export default class AppContext {
  private axiosInstance: AxiosInstance;
  private providers: ProviderDependencies;
  private repositories: RepositoryDependencies;
  useCases: UseCaseDependencies;

  constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance;
    this.providers = {
      firebaseUser: new FirebaseUserProvider(),
      httpUser: new HttpUserProvider(axiosInstance),
      httpStockItem: new HttpStockItemProvider(axiosInstance),
    };
    this.repositories = {
      user: new UserRepository(this.providers.firebaseUser, this.providers.httpUser),
      stockItem: new StockItemRepository(this.providers.httpStockItem),
    };
    this.useCases = {
      createUser: new CreateUser(this.repositories.user),
      getCurrentUser: new GetCurrentUser(this.repositories.user),
      getCurrentUserToken: new GetCurrentUserToken(this.repositories.user),
      findStockItemsBy: new FindStockItemsBy(this.repositories.stockItem),
      countStockItems: new CountStockItems(this.repositories.stockItem),
    };
  }
}
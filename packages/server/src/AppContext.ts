import FirebaseUserProvider from './data/providers/account/FirebaseUserProvider';
import UserRepository from './data/repositories/account/UserRepository';
import FindUserById from '@stocker/core/lib/domain/use-cases/account/FindUserById';
import FirebaseAuthProvider from './data/providers/auth/FirebaseAuthProvider';
import AuthRepository from './data/repositories/auth/AuthRepository';
import VerifyToken from '@stocker/core/lib/domain/use-cases/auth/VerifyToken';
import DecodeToken from '@stocker/core/lib/domain/use-cases/auth/DecodeToken';
import SequelizeStockItemProvider from './data/providers/stock-item/SequelizeStockItemProvider';
import StockItemRepository from './data/repositories/stock-item/StockItemRepository';
import CrawlStockItems from '@stocker/core/lib/domain/use-cases/stock-item/CrawlStockItems';
import CreateStockItem from '@stocker/core/lib/domain/use-cases/stock-item/CreateStockItem';
import UpdateStockItem from '@stocker/core/lib/domain/use-cases/stock-item/UpdateStockItem';
import DeleteStockItem from '@stocker/core/lib/domain/use-cases/stock-item/DeleteStockItem';
import FindStockItemsBy from '@stocker/core/lib/domain/use-cases/stock-item/FindStockItemsBy';
import CountStockItems from '@stocker/core/lib/domain/use-cases/stock-item/CountStockItems';

interface ProviderDependencies {
  user: FirebaseUserProvider;
  auth: FirebaseAuthProvider;
  stockItem: SequelizeStockItemProvider;
}

interface RepositoryDependencies {
  user: UserRepository;
  auth: AuthRepository;
  stockItem: StockItemRepository;
}

interface UseCaseDependencies {
  findUserById: FindUserById;
  verifyToken: VerifyToken;
  decodeToken: DecodeToken;
  crawlStockItems: CrawlStockItems;
  createStockItem: CreateStockItem;
  updateStockItem: UpdateStockItem;
  deleteStockItem: DeleteStockItem;
  findStockItemsBy: FindStockItemsBy;
  countStockItems: CountStockItems;
}

export default class AppContext {
  private providers: ProviderDependencies;
  private repositories: RepositoryDependencies;
  useCases: UseCaseDependencies;

  constructor() {
    this.providers = {
      user: new FirebaseUserProvider(),
      auth: new FirebaseAuthProvider(),
      stockItem: new SequelizeStockItemProvider(),
    };
    this.repositories = {
      user: new UserRepository(this.providers.user),
      auth: new AuthRepository(this.providers.auth),
      stockItem: new StockItemRepository(this.providers.stockItem),
    };
    this.useCases = {
      findUserById: new FindUserById(this.repositories.user),
      verifyToken: new VerifyToken(this.repositories.auth),
      decodeToken: new DecodeToken(this.repositories.auth),
      crawlStockItems: new CrawlStockItems(this.repositories.stockItem),
      createStockItem: new CreateStockItem(this.repositories.stockItem),
      updateStockItem: new UpdateStockItem(this.repositories.stockItem),
      deleteStockItem: new DeleteStockItem(this.repositories.stockItem),
      findStockItemsBy: new FindStockItemsBy(this.repositories.stockItem),
      countStockItems: new CountStockItems(this.repositories.stockItem),
    }
  }
}
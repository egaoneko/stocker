import FirebaseUserProvider from './data/providers/account/FirebaseUserProvider';
import UserRepository from './data/repositories/account/UserRepository';
import FindUserById from '@stocker/core/lib/domain/use-cases/account/FindUserById';
import CreateUser from '@stocker/core/lib/domain/use-cases/account/CreateUser';
import FirebaseAuthProvider from './data/providers/auth/FirebaseAuthProvider';
import AuthRepository from './data/repositories/auth/AuthRepository';
import VerifyToken from '@stocker/core/lib/domain/use-cases/auth/VerifyToken';
import DecodeToken from '@stocker/core/lib/domain/use-cases/auth/DecodeToken';
import FindUserByUid from '@stocker/core/lib/domain/use-cases/auth/FindUserByUid';
import SequelizeStockItemProvider from './data/providers/stock-item/SequelizeStockItemProvider';
import StockItemRepository from './data/repositories/stock-item/StockItemRepository';
import CrawlStockItems from '@stocker/core/lib/domain/use-cases/stock-item/CrawlStockItems';
import CreateStockItem from '@stocker/core/lib/domain/use-cases/stock-item/CreateStockItem';
import UpdateStockItem from '@stocker/core/lib/domain/use-cases/stock-item/UpdateStockItem';
import DeleteStockItem from '@stocker/core/lib/domain/use-cases/stock-item/DeleteStockItem';
import FindStockItemsBy from '@stocker/core/lib/domain/use-cases/stock-item/FindStockItemsBy';
import CountStockItems from '@stocker/core/lib/domain/use-cases/stock-item/CountStockItems';
import SequelizeScheduleProvider from './data/providers/schedule/SequelizeScheduleProvider';
import ScheduleRepository from './data/repositories/schedule/ScheduleRepository';
import CreateSchedule from '@stocker/core/lib/domain/use-cases/schedule/CreateSchedule';
import UpdateSchedule from '@stocker/core/lib/domain/use-cases/schedule/UpdateSchedule';
import DeleteSchedule from '@stocker/core/lib/domain/use-cases/schedule/DeleteSchedule';
import FindSchedulesBy from '@stocker/core/lib/domain/use-cases/schedule/FindSchedulesBy';
import CountSchedules from '@stocker/core/lib/domain/use-cases/schedule/CountSchedules';

interface ProviderDependencies {
  user: FirebaseUserProvider;
  auth: FirebaseAuthProvider;
  stockItem: SequelizeStockItemProvider;
  schedule: SequelizeScheduleProvider;
}

interface RepositoryDependencies {
  user: UserRepository;
  auth: AuthRepository;
  stockItem: StockItemRepository;
  schedule: ScheduleRepository;
}

interface UseCaseDependencies {
  findUserById: FindUserById;
  createUser: CreateUser;
  verifyToken: VerifyToken;
  decodeToken: DecodeToken;
  findUserByUid: FindUserByUid;
  crawlStockItems: CrawlStockItems;
  createStockItem: CreateStockItem;
  updateStockItem: UpdateStockItem;
  deleteStockItem: DeleteStockItem;
  findStockItemsBy: FindStockItemsBy;
  countStockItems: CountStockItems;
  createSchedule: CreateSchedule;
  updateSchedule: UpdateSchedule;
  deleteSchedule: DeleteSchedule;
  findSchedulesBy: FindSchedulesBy;
  countSchedules: CountSchedules;
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
      schedule: new SequelizeScheduleProvider(),
    };
    this.repositories = {
      user: new UserRepository(this.providers.user),
      auth: new AuthRepository(this.providers.auth),
      stockItem: new StockItemRepository(this.providers.stockItem),
      schedule: new ScheduleRepository(this.providers.schedule),
    };
    this.useCases = {
      findUserById: new FindUserById(this.repositories.user),
      createUser: new CreateUser(this.repositories.user),
      verifyToken: new VerifyToken(this.repositories.auth),
      decodeToken: new DecodeToken(this.repositories.auth),
      findUserByUid: new FindUserByUid(this.repositories.auth),
      crawlStockItems: new CrawlStockItems(this.repositories.stockItem),
      createStockItem: new CreateStockItem(this.repositories.stockItem),
      updateStockItem: new UpdateStockItem(this.repositories.stockItem),
      deleteStockItem: new DeleteStockItem(this.repositories.stockItem),
      findStockItemsBy: new FindStockItemsBy(this.repositories.stockItem),
      countStockItems: new CountStockItems(this.repositories.stockItem),
      createSchedule: new CreateSchedule(this.repositories.schedule),
      updateSchedule: new UpdateSchedule(this.repositories.schedule),
      deleteSchedule: new DeleteSchedule(this.repositories.schedule),
      findSchedulesBy: new FindSchedulesBy(this.repositories.schedule),
      countSchedules: new CountSchedules(this.repositories.schedule),
    }
  }
}
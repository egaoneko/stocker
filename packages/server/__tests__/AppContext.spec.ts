import './__config__/firebase-admin';
import AppContext from '../src/AppContext';
import FirebaseUserProvider from '../src/data/providers/account/FirebaseUserProvider';
import UserRepository from '../src/data/repositories/account/UserRepository';
import FindUserById from '@stocker/core/lib/domain/use-cases/account/FindUserById';
import FirebaseAuthProvider from '../src/data/providers/auth/FirebaseAuthProvider';
import AuthRepository from '../src/data/repositories/auth/AuthRepository';
import VerifyToken from '@stocker/core/lib/domain/use-cases/auth/VerifyToken';
import DecodeToken from '@stocker/core/lib/domain/use-cases/auth/DecodeToken';
import SequelizeStockItemProvider from '../src/data/providers/stock-item/SequelizeStockItemProvider';
import StockItemRepository from '../src/data/repositories/stock-item/StockItemRepository';
import CrawlStockItems from '@stocker/core/lib/domain/use-cases/stock-item/CrawlStockItems';
import CreateStockItem from '@stocker/core/lib/domain/use-cases/stock-item/CreateStockItem';
import UpdateStockItem from '@stocker/core/lib/domain/use-cases/stock-item/UpdateStockItem';
import DeleteStockItem from '@stocker/core/lib/domain/use-cases/stock-item/DeleteStockItem';
import FindStockItemsBy from '@stocker/core/lib/domain/use-cases/stock-item/FindStockItemsBy';
import CountStockItems from '@stocker/core/lib/domain/use-cases/stock-item/CountStockItems';
import SequelizeScheduleProvider from '../src/data/providers/schedule/SequelizeScheduleProvider';
import ScheduleRepository from '../src/data/repositories/schedule/ScheduleRepository';
import CreateSchedule from '@stocker/core/lib/domain/use-cases/schedule/CreateSchedule';
import UpdateSchedule from '@stocker/core/lib/domain/use-cases/schedule/UpdateSchedule';
import DeleteSchedule from '@stocker/core/lib/domain/use-cases/schedule/DeleteSchedule';
import FindSchedulesBy from '@stocker/core/lib/domain/use-cases/schedule/FindSchedulesBy';
import CountSchedules from '@stocker/core/lib/domain/use-cases/schedule/CountSchedules';

describe('AppContext', () => {
  const application: AppContext = new AppContext();

  test('User', () => {
    expect((application as any).providers.user).toBeInstanceOf(FirebaseUserProvider);
    expect((application as any).repositories.user).toBeInstanceOf(UserRepository);
    expect((application as any).useCases.findUserById).toBeInstanceOf(FindUserById);
  });

  test('Auth', () => {
    expect((application as any).providers.auth).toBeInstanceOf(FirebaseAuthProvider);
    expect((application as any).repositories.auth).toBeInstanceOf(AuthRepository);
    expect((application as any).useCases.verifyToken).toBeInstanceOf(VerifyToken);
    expect((application as any).useCases.decodeToken).toBeInstanceOf(DecodeToken);
  });

  test('StockItem', () => {
    expect((application as any).providers.stockItem).toBeInstanceOf(SequelizeStockItemProvider);
    expect((application as any).repositories.stockItem).toBeInstanceOf(StockItemRepository);
    expect((application as any).useCases.crawlStockItems).toBeInstanceOf(CrawlStockItems);
    expect((application as any).useCases.createStockItem).toBeInstanceOf(CreateStockItem);
    expect((application as any).useCases.updateStockItem).toBeInstanceOf(UpdateStockItem);
    expect((application as any).useCases.deleteStockItem).toBeInstanceOf(DeleteStockItem);
    expect((application as any).useCases.findStockItemsBy).toBeInstanceOf(FindStockItemsBy);
    expect((application as any).useCases.countStockItems).toBeInstanceOf(CountStockItems);
  });

  test('Schedule', () => {
    expect((application as any).providers.schedule).toBeInstanceOf(SequelizeScheduleProvider);
    expect((application as any).repositories.schedule).toBeInstanceOf(ScheduleRepository);
    expect((application as any).useCases.createSchedule).toBeInstanceOf(CreateSchedule);
    expect((application as any).useCases.updateSchedule).toBeInstanceOf(UpdateSchedule);
    expect((application as any).useCases.deleteSchedule).toBeInstanceOf(DeleteSchedule);
    expect((application as any).useCases.findSchedulesBy).toBeInstanceOf(FindSchedulesBy);
    expect((application as any).useCases.countSchedules).toBeInstanceOf(CountSchedules);
  });
});

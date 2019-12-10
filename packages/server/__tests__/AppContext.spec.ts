import './__config__/firebase';
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
});

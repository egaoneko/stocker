import AppContext from '../AppContext';
import FirebaseUserProvider from '../data/providers/account/FirebaseUserProvider';
import HttpUserProvider from '../data/providers/account/HttpUserProvider';
import UserRepository from '../data/repositories/account/UserRepository';
import GetCurrentUser from '@stocker/core/lib/domain/use-cases/account/GetCurrentUser';
import GetCurrentUserToken from '@stocker/core/lib/domain/use-cases/account/GetCurrentUserToken';
import CreateUser from '@stocker/core/lib/domain/use-cases/account/CreateUser';
import HttpStockItemProvider from '../data/providers/stock-item/HttpStockItemProvider';
import StockItemRepository from '../data/repositories/stock-item/StockItemRepository';
import FindStockItemsBy from '@stocker/core/lib/domain/use-cases/stock-item/FindStockItemsBy';

describe('AppContext', () => {
  const axiosInstance: any = {};
  const application: AppContext = new AppContext(axiosInstance);

  test('User', () => {
    expect((application as any).providers.firebaseUser).toBeInstanceOf(FirebaseUserProvider);
    expect((application as any).providers.httpUser).toBeInstanceOf(HttpUserProvider);
    expect((application as any).repositories.user).toBeInstanceOf(UserRepository);
    expect((application as any).useCases.createUser).toBeInstanceOf(CreateUser);
    expect((application as any).useCases.getCurrentUser).toBeInstanceOf(GetCurrentUser);
    expect((application as any).useCases.getCurrentUserToken).toBeInstanceOf(GetCurrentUserToken);
  });

  test('StockItem', () => {
    expect((application as any).providers.httpStockItem).toBeInstanceOf(HttpStockItemProvider);
    expect((application as any).repositories.stockItem).toBeInstanceOf(StockItemRepository);
    expect((application as any).useCases.findStockItemsBy).toBeInstanceOf(FindStockItemsBy);
  });
});

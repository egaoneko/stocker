import AppContext from '../AppContext';
import FirebaseUserProvider from '../data/ui/providers/account/FirebaseUserProvider';
import UserRepository from '../data/repositories/account/UserRepository';
import GetCurrentUser from '@stocker/core/lib/domain/use-cases/account/GetCurrentUser';

describe('AppContext', () => {
  const application: AppContext = new AppContext();

  test('User', () => {
    expect((application as any).providers.user).toBeInstanceOf(FirebaseUserProvider);
    expect((application as any).repositories.user).toBeInstanceOf(UserRepository);
    expect((application as any).useCases.getCurrentUser).toBeInstanceOf(GetCurrentUser);
  });
});

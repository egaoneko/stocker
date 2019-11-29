import AppContext from '../src/AppContext';
import SequelizeUserProvider from '../src/data/db/providers/SequelizeUserProvider';
import SquelizeUserRepository from '../src/data/repositories/SquelizeUserRepository';
import CreateUser from '@stocker/core/lib/domain/use-cases/account/CreateUser';

describe('AppContext', () => {
  test('constructor', () => {
    const application: AppContext = new AppContext();
    expect((application as any).providers.user).toBeInstanceOf(SequelizeUserProvider);
    expect((application as any).repositories.user).toBeInstanceOf(SquelizeUserRepository);
    expect((application as any).useCases.createUser).toBeInstanceOf(CreateUser);
  });
});

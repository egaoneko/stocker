import SequelizeUserProvider from './db/providers/SequelizeUserProvider';
import SquelizeUserRepository from './repositories/SquelizeUserRepository';
import CreateUser from '@stocker/core/lib/domain/use-cases/account/CreateUser';

interface ProviderDependencies {
  user: SequelizeUserProvider;
}

interface RepositoryDependencies {
  user: SquelizeUserRepository;
}

interface UseCaseDependencies {
  createUser: CreateUser;
}

export default class AppContext {
  private providers: ProviderDependencies;
  private repositories: RepositoryDependencies;
  useCases: UseCaseDependencies;

  constructor() {
    this.providers = {
      user: new SequelizeUserProvider(),
    };
    this.repositories = {
      user: new SquelizeUserRepository(this.providers.user),
    };
    this.useCases = {
      createUser: new CreateUser(this.repositories.user),
    }
  }
}
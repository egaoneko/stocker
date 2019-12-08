import FirebaseUserProvider from './data/providers/account/FirebaseUserProvider';
import UserRepository from './data/repositories/account/UserRepository';
import GetCurrentUser from '@stocker/core/lib/domain/use-cases/account/GetCurrentUser';
import GetCurrentUserToken from '@stocker/core/lib/domain/use-cases/account/GetCurrentUserToken';
import CreateUser from '@stocker/core/lib/domain/use-cases/account/CreateUser';

interface ProviderDependencies {
  user: FirebaseUserProvider;
}

interface RepositoryDependencies {
  user: UserRepository;
}

interface UseCaseDependencies {
  createUser: CreateUser;
  getCurrentUser: GetCurrentUser;
  getCurrentUserToken: GetCurrentUserToken;
}

export default class AppContext {
  private providers: ProviderDependencies;
  private repositories: RepositoryDependencies;
  useCases: UseCaseDependencies;

  constructor() {
    this.providers = {
      user: new FirebaseUserProvider(),
    };
    this.repositories = {
      user: new UserRepository(this.providers.user),
    };
    this.useCases = {
      createUser: new CreateUser(this.repositories.user),
      getCurrentUser: new GetCurrentUser(this.repositories.user),
      getCurrentUserToken: new GetCurrentUserToken(this.repositories.user),
    }
  }
}
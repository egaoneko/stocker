import FirebaseUserProvider from './data/providers/account/FirebaseUserProvider';
import UserRepository from './data/repositories/account/UserRepository';
import GetCurrentUser from '@stocker/core/lib/domain/use-cases/account/GetCurrentUser';
import GetCurrentUserToken from '@stocker/core/lib/domain/use-cases/account/GetCurrentUserToken';
import CreateUser from '@stocker/core/lib/domain/use-cases/account/CreateUser';
import { AxiosInstance } from 'axios';
import HttpUserProvider from './data/providers/account/HttpUserProvider';

interface ProviderDependencies {
  firebaseUser: FirebaseUserProvider;
  httpUser: HttpUserProvider;
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
  private axiosInstance: AxiosInstance;
  private providers: ProviderDependencies;
  private repositories: RepositoryDependencies;
  useCases: UseCaseDependencies;

  constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance;
    this.providers = {
      firebaseUser: new FirebaseUserProvider(),
      httpUser: new HttpUserProvider(axiosInstance),
    };
    this.repositories = {
      user: new UserRepository(this.providers.firebaseUser, this.providers.httpUser),
    };
    this.useCases = {
      createUser: new CreateUser(this.repositories.user),
      getCurrentUser: new GetCurrentUser(this.repositories.user),
      getCurrentUserToken: new GetCurrentUserToken(this.repositories.user),
    }
  }
}
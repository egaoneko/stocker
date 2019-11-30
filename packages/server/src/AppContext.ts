import FirebaseUserProvider from './data/db/providers/account/FirebaseUserProvider';
import UserRepository from './data/repositories/account/UserRepository';
import FindUserById from '@stocker/core/lib/domain/use-cases/account/FindUserById';
import FirebaseAuthProvider from './data/db/providers/auth/FirebaseAuthProvider';
import AuthRepository from './data/repositories/auth/AuthRepository';
import VerifyToken from '@stocker/core/lib/domain/use-cases/auth/VerifyToken';
import DecodeToken from '@stocker/core/lib/domain/use-cases/auth/DecodeToken';

interface ProviderDependencies {
  user: FirebaseUserProvider;
  auth: FirebaseAuthProvider;
}

interface RepositoryDependencies {
  user: UserRepository;
  auth: AuthRepository;
}

interface UseCaseDependencies {
  findUserById: FindUserById;
  verifyToken: VerifyToken;
  decodeToken: DecodeToken;
}

export default class AppContext {
  private providers: ProviderDependencies;
  private repositories: RepositoryDependencies;
  useCases: UseCaseDependencies;

  constructor() {
    this.providers = {
      user: new FirebaseUserProvider(),
      auth: new FirebaseAuthProvider(),
    };
    this.repositories = {
      user: new UserRepository(this.providers.user),
      auth: new AuthRepository(this.providers.auth),
    };
    this.useCases = {
      findUserById: new FindUserById(this.repositories.user),
      verifyToken: new VerifyToken(this.repositories.auth),
      decodeToken: new DecodeToken(this.repositories.auth),
    }
  }
}
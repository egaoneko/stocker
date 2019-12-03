import {
  Observable
} from 'rxjs';
import UserRepositoryInterface from '@stocker/core/lib/domain/repositories/account/UserRepository';
import User from '@stocker/core/lib/domain/entities/account/User';
import FirebaseUserProvider from '../../firebase/providers/account/FirebaseUserProvider';
import ApplicationErrorFactory from '@stocker/core/lib/data/errors/ApplicationErrorFactory';
import ErrorType from '@stocker/core/lib/error/ErrorType';

export default class UserRepository implements UserRepositoryInterface {
  constructor(
    private provider: FirebaseUserProvider,
  ) {
  }

  public findUserById(id: string): Observable<User | null> {
    throw ApplicationErrorFactory.getError(ErrorType.GENERAL, 'findUserById is not supported.');
  }

  public createUser(user: User): Observable<boolean> {
    return this.provider.createUser(user);
  }

  public getCurrentUser(): Observable<User | null> {
    return this.provider.getCurrentUser();
  }

  public getCurrentUserToken(): Observable<string | null> {
    return this.provider.getCurrentUserToken();
  }
}
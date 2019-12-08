import {
  Observable
} from 'rxjs';
import UserRepositoryInterface from '@stocker/core/lib/domain/repositories/account/UserRepository';
import FirebaseUserProvider from '../../providers/account/FirebaseUserProvider';
import User from '@stocker/core/lib/domain/entities/account/User';
import ApplicationErrorFactory from '@stocker/core/lib/data/errors/ApplicationErrorFactory';
import ErrorType from '@stocker/core/lib/error/ErrorType';

export default class UserRepository implements UserRepositoryInterface {
  constructor(
    private provider: FirebaseUserProvider,
  ) {
  }

  public findUserById(id: string): Observable<User | null> {
    return this.provider.findUserById(id);
  }

  public createUser(user: User): Observable<[User, boolean]> {
    throw ApplicationErrorFactory.getError(ErrorType.GENERAL, 'createUser is not supported.');
  }

  public getCurrentUser(): Observable<User | null> {
    throw ApplicationErrorFactory.getError(ErrorType.GENERAL, 'getCurrentUser is not supported.');
  }

  public getCurrentUserToken(): Observable<string | null> {
    throw ApplicationErrorFactory.getError(ErrorType.GENERAL, 'getCurrentUserToken is not supported.');
  }
}
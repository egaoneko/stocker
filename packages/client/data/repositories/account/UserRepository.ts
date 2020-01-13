import {
  Observable,
  of
} from 'rxjs';
import UserRepositoryInterface from '@stocker/core/lib/domain/repositories/account/UserRepository';
import User from '@stocker/core/lib/domain/entities/account/User';
import FirebaseUserProvider from '../../providers/account/FirebaseUserProvider';
import HttpUserProvider from '../../providers/account/HttpUserProvider';
import { switchMap } from 'rxjs/operators';

export default class UserRepository implements UserRepositoryInterface {
  constructor(
    private firebaseProvider: FirebaseUserProvider,
    private httpProvider: HttpUserProvider,
  ) {
  }

  public findUserById(id: string): Observable<User | null> {
    return this.firebaseProvider.findUserById(id);
  }

  public createUser(user: User): Observable<[User, boolean]> {
    return this.httpProvider.createUser(user)
      .pipe(
        switchMap<boolean, Observable<[User, boolean]>>(
          (success: boolean): Observable<[User, boolean]> => {
            return of([user, success]);
          })
      );
  }

  public getCurrentUser(): Observable<User | null> {
    return this.firebaseProvider.getCurrentUser();
  }

  public getCurrentUserToken(): Observable<string | null> {
    return this.firebaseProvider.getCurrentUserToken();
  }
}
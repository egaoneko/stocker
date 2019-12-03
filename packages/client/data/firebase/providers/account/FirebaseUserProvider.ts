import {
  Observable,
  of
} from 'rxjs';
import User from '@stocker/core/lib/domain/entities/account/User';
import firebase from '../../../../libs/firebase';
import FirebaseUserMapper from '../../mappers/account/FirebaseUserMapper';
import { fromPromise } from 'rxjs/internal-compatibility';
import {
  switchMap
} from 'rxjs/operators';
import ApplicationErrorFactory from '@stocker/core/lib/data/errors/ApplicationErrorFactory';
import ErrorType from '@stocker/core/lib/error/ErrorType';

export default class FirebaseUserProvider {
  public createUser(user: User): Observable<boolean> {
    const userRef: firebase.database.Reference = firebase.database().ref('users/' + user.id);
    return fromPromise(userRef.once('value'))
      .pipe(
        switchMap<firebase.database.DataSnapshot, Observable<boolean>>(
          (dataSnapShot: firebase.database.DataSnapshot): Observable<boolean> => {
            if (!dataSnapShot.hasChildren()) {
              return fromPromise(
                userRef
                  .set({
                    email: user.email,
                    name: user.name,
                    role: user.role,
                  })
                  .then((err: any): boolean => {
                    if (err) {
                      throw ApplicationErrorFactory.getError(ErrorType.GENERAL, `Fail create user: ${err}`);
                    }
                    return true;
                  })
              );
            }
            return fromPromise(Promise.resolve(false));
          }
        )
      );
  }

  public getCurrentUser(): Observable<User | null> {
    const user: firebase.User | null = firebase.auth().currentUser;

    if (!user) {
      return of(null);
    }

    return of(new FirebaseUserMapper().toEntity(user));
  }

  public getCurrentUserToken(): Observable<string | null> {
    const user: firebase.User | null = firebase.auth().currentUser;

    if (!user) {
      return of(null);
    }

    return fromPromise(user.getIdToken());
  }
}
import { Observable } from 'rxjs';
import { fromPromise } from 'rxjs/internal-compatibility';
import User from '@stocker/core/lib/domain/entities/account/User';
import UserDataSnapshotMapper from '../../mappers/account/UserDataSnapshotMapper';
import {
  map,
  switchMap,
} from 'rxjs/operators';
import ApplicationErrorFactory from '@stocker/core/lib/data/errors/ApplicationErrorFactory';
import ErrorType from '@stocker/core/lib/error/ErrorType';
import admin from '../../../libs/firebase-admin';

export default class FirebaseUserProvider {
  public createUser(user: User): Observable<[User, boolean]> {
    const userRef: admin.database.Reference = admin.database().ref('users/' + user.id);
    return fromPromise(userRef.once('value'))
      .pipe(
        switchMap<admin.database.DataSnapshot, Observable<[User, boolean]>>(
          (dataSnapShot: admin.database.DataSnapshot): Observable<[User, boolean]> => {
            if (!dataSnapShot.hasChildren()) {
              return fromPromise(
                userRef
                  .set({
                    email: user.email,
                    name: user.name,
                    role: user.role,
                    photo: user.photo,
                  })
                  .then((err: any): [User, boolean] => {
                    if (err) {
                      throw ApplicationErrorFactory.getError(ErrorType.GENERAL, `Fail create user: ${err}`);
                    }
                    return [user, true];
                  })
              );
            }
            return fromPromise(Promise.resolve([user, false]));
          }
        )
      );
  }

  public findUserById(uid: string): Observable<User | null> {
    const userRef: admin.database.Reference = admin.database().ref('users/' + uid);
    return fromPromise(userRef.once('value'))
      .pipe(
        map<admin.database.DataSnapshot, User | null>(
          (dataSnapShot: admin.database.DataSnapshot): User | null => {
            if (!dataSnapShot.hasChildren()) {
              return null;
            }

            return new UserDataSnapshotMapper().toEntity(dataSnapShot);
          }
        )
      );
  }
}
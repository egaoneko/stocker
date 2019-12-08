import { Observable } from 'rxjs';
import { fromPromise } from 'rxjs/internal-compatibility';
import User from '@stocker/core/lib/domain/entities/account/User';
import admin from '../../../libs/firebase-admin';
import UserDataSnapshotMapper from '../../mappers/account/UserDataSnapshotMapper';
import {
  map,
} from 'rxjs/operators';

export default class FirebaseUserProvider {
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
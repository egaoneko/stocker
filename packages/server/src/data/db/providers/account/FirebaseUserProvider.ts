import { Observable } from 'rxjs';
import { fromPromise } from 'rxjs/internal-compatibility';
import User from '@stocker/core/lib/domain/entities/account/User';
import firebase from '../../../../libs/firebase';
import UserRecordMapper from '../../mappers/account/UserRecordMapper';

export default class FirebaseUserProvider {
  public findUserById(uid: string): Observable<User | null> {
    return fromPromise(
      firebase.auth().getUser(uid)
        .then((userRecord: firebase.auth.UserRecord): User | null => {
          return new UserRecordMapper().toEntity(userRecord);
        })
    );
  }
}
import {
  AsyncSubject,
  Observable,
  of
} from 'rxjs';
import User, { UserInterface } from '@stocker/core/lib/domain/entities/account/User';
import firebase from '../../../libs/firebase';
import FirebaseUserMapper from '../../mappers/account/FirebaseUserMapper';
import { fromPromise } from 'rxjs/internal-compatibility';
import {
  switchMap
} from 'rxjs/operators';
import UserJSONMapper from '@stocker/core/lib/data/mappers/account/UserJSONMapper';

const mapper: UserJSONMapper = new UserJSONMapper();

export default class FirebaseUserProvider {
  public findUserById(id: string): Observable<User | null> {
    const userRef: firebase.database.Reference = firebase.database().ref('users/' + id);
    return fromPromise(userRef.once('value'))
      .pipe(
        switchMap<firebase.database.DataSnapshot, Observable<User | null>>(
          (dataSnapShot: firebase.database.DataSnapshot): Observable<User | null> => {
            if (!dataSnapShot.hasChildren()) {
              return of(null);
            }
            return of(mapper.toEntity({
              id,
              ...dataSnapShot.toJSON() as UserInterface,
            }));
          }
        )
      );
  }

  public getCurrentUser(): Observable<User | null> {
    const subject: AsyncSubject<User | null> = new AsyncSubject();
    firebase.auth().onAuthStateChanged((user: firebase.User | null) => {
      if (!user) {
        subject.next(null);
      } else {
        subject.next(new FirebaseUserMapper().toEntity(user));
      }
      subject.complete();
    });
    return subject;
  }

  public getCurrentUserToken(): Observable<string | null> {
    const user: firebase.User | null = firebase.auth().currentUser;

    if (!user) {
      return of(null);
    }

    return fromPromise(user.getIdToken());
  }
}
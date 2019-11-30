import {
  Observable,
  of
} from 'rxjs';
import User from '@stocker/core/lib/domain/entities/account/User';
import firebase from '../../../../libs/firebase';
import FirebaseUserMapper  from '../../mappers/account/FirebaseUserMapper';

export default class FirebaseUserProvider {
  public getCurrentUser(): Observable<User | null> {
    const user: firebase.User | null = firebase.auth().currentUser;

    if (!user) {
      return of(null);
    }

    return of(new FirebaseUserMapper().toEntity(user));
  }
}
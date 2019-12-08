import firebase from '../../../libs/firebase';
import ValueMapper from '@stocker/core/lib/data/mappers/ValueMapper';
import User from '@stocker/core/lib/domain/entities/account/User';
import { Role } from '@stocker/core/lib/enums/account';

export default class FirebaseUserMapper implements ValueMapper<firebase.User, User> {
  public toEntity(fbUser: firebase.User): User {
    const user: User = new User(
      fbUser.uid,
      fbUser.email || '',
      fbUser.displayName || '',
      Role.USER
    );

    user.photo = fbUser.photoURL || '';
    user.provider = fbUser.providerId;

    return user;
  }
}
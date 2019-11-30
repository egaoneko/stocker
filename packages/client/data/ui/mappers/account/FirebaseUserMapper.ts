import firebase from '../../../../libs/firebase';
import ValueMapper from '@stocker/core/lib/data/http/mappers/ValueMapper';
import User from '@stocker/core/lib/domain/entities/account/User';
import { Role } from '@stocker/core/lib/constant/account';

export default class FirebaseUserMapper implements ValueMapper<firebase.User, User> {
  public toEntity(user: firebase.User): User {
    return new User(
      user.uid,
      user.email || '',
      user.displayName || '',
      Role.USER
    );
  }
}
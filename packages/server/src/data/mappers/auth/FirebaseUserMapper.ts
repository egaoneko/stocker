import admin from '../../../libs/firebase-admin';
import ValueMapper from '@stocker/core/lib/data/mappers/ValueMapper';
import User from '@stocker/core/lib/domain/entities/account/User';
import { Role } from '@stocker/core/lib/enums/account';

export default class FirebaseUserMapper implements ValueMapper<admin.auth.UserRecord, User> {
  public toEntity(fbUser: admin.auth.UserRecord): User {
    const user: User = new User(
      fbUser.uid,
      fbUser.email || '',
      fbUser.displayName || '',
      Role.USER
    );

    user.photo = fbUser.photoURL || '';
    return user;
  }
}
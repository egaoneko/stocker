import ValueMapper from '@stocker/core/lib/data/http/mappers/ValueMapper';
import User from '@stocker/core/lib/domain/entities/account/User';
import admin from '../../../../libs/firebase-admin';

export default class UserDataSnapshotMapper implements ValueMapper<admin.database.DataSnapshot, User> {
  public toEntity(dataSnapshot: admin.database.DataSnapshot): User {
    const key: string = dataSnapshot.key as string;
    const {
      email,
      name,
      role,
      photo,
      provider,
    } = dataSnapshot.val();
    const user: User = new User(
      key,
      email,
      name,
      role
    );

    user.photo = photo;
    user.provider = provider;

    return user;
  }
}
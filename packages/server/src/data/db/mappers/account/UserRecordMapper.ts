import ValueMapper from '@stocker/core/lib/data/http/mappers/ValueMapper';
import firebase from '../../../../libs/firebase';
import User from '@stocker/core/lib/domain/entities/account/User';
import { Role } from '@stocker/core/lib/constant/account';

interface UserRecord {
  uid: string;
  email: string;
  displayName: string;
  emailVerified: boolean;
  isAnonymous: boolean;
  phoneNumber: string;
  photoURL: string;
}

export default class UserRecordMapper implements ValueMapper<firebase.auth.UserRecord, User> {
  public toEntity(record: firebase.auth.UserRecord): User {
    const {
      uid,
      email,
      displayName,
    }: UserRecord = record.toJSON() as UserRecord;
    return new User(
      uid,
      email,
      displayName,
      Role.USER
    );
  }
}
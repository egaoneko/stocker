import { Observable } from 'rxjs';
import { fromPromise } from 'rxjs/internal-compatibility';
import { Transaction } from 'sequelize';
import User from '../../models/User';
import UserEntity from '@stocker/core/lib/domain/entities/account/User';

export default class SequelizeUserProvider {
  public createUser(user: UserEntity, transaction?: Transaction): Observable<[UserEntity, boolean]> {
    return fromPromise(
      User.createUser(user, transaction).then(
        ([user, created]: [User, boolean]): [UserEntity, boolean] => [user.toEntity(), created])
    );
  }
}
import {
  Observable
} from 'rxjs';
import UserRepository from '@stocker/core/lib/domain/repositories/account/UserRepository';
import SequelizeUserProvider from '../db/providers/SequelizeUserProvider';
import User from '@stocker/core/lib/domain/entities/account/User';

export default class SquelizeUserRepository implements UserRepository {
  constructor(
    private provider: SequelizeUserProvider,
  ) {
  }

  public createUser(user: User): Observable<[User, boolean]> {
    return this.provider.createUser(user);
  }
}
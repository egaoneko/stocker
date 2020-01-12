import { Observable } from 'rxjs';
import UseCase from '../UseCase';
import User from '../../entities/account/User';
import AuthRepository from '../../repositories/auth/AuthRepository';

export default class FindUserByUid extends UseCase<User | null> {
  public uid: string = '';

  constructor(
    private repository: AuthRepository
  ) {
    super();
  }

  protected build(): Observable<User | null> {
    return this.repository.findUserByUid(this.uid);
  }

  protected validate(): boolean {
    return !!this.uid;
  }
}
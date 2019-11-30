import { Observable } from 'rxjs';
import UseCase from '../UseCase';
import AuthRepository from '../../repositories/auth/AuthRepository';

export default class VerifyToken extends UseCase<boolean> {
  public token: string = '';

  constructor(
    private repository: AuthRepository
  ) {
    super();
  }

  protected build(): Observable<boolean> {
    return this.repository.verifyToken(this.token);
  }

  protected validate(): boolean {
    return !!this.token;
  }
}
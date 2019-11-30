import { Observable } from 'rxjs';
import UseCase from '../UseCase';
import AuthRepository from '../../repositories/auth/AuthRepository';

export default class DecodeToken extends UseCase<string | null> {
  public token: string = '';

  constructor(
    private repository: AuthRepository
  ) {
    super();
  }

  protected build(): Observable<string | null> {
    return this.repository.decodeToken(this.token);
  }

  protected validate(): boolean {
    return !!this.token;
  }
}
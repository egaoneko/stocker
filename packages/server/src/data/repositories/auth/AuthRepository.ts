import {
  Observable
} from 'rxjs';
import AuthRepositoryInterface from '@stocker/core/lib/domain/repositories/auth/AuthRepository';
import FirebaseAuthProvider from '../../providers/auth/FirebaseAuthProvider';
import User from '@stocker/core/lib/domain/entities/account/User';

export default class AuthRepository implements AuthRepositoryInterface {
  constructor(
    private provider: FirebaseAuthProvider,
  ) {
  }

  public verifyToken(token: string): Observable<boolean> {
    return this.provider.verifyToken(token);
  }

  public decodeToken(token: string): Observable<string | null> {
    return this.provider.decodeToken(token);
  }

  public findUserByUid(uid: string): Observable<User | null> {
    return this.provider.findUserByUid(uid);
  }
}
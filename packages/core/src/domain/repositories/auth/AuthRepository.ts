import { Observable } from 'rxjs';
import Repository from '../Repository';
import User from '../../entities/account/User';

export default interface AuthRepository extends Repository {
  verifyToken(token: string): Observable<boolean>;

  decodeToken(token: string): Observable<string | null>;

  findUserByUid(uid: string): Observable<User | null>;

  // --ADD_METHOD--
}
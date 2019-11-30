import { Observable } from 'rxjs';
import Repository from '../Repository';

export default interface AuthRepository extends Repository {
  verifyToken(token: string): Observable<boolean>;

  decodeToken(token: string): Observable<string | null>;
}
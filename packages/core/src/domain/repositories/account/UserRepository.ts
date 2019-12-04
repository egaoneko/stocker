import { Observable } from 'rxjs';
import Repository from '../Repository';
import User from '../../entities/account/User';

export default interface UserRepository extends Repository {
  findUserById(id: string): Observable<User | null>;

  createUser(user: User): Observable<boolean>;

  getCurrentUser(): Observable<User | null>;

  getCurrentUserToken(): Observable<string | null>;
}
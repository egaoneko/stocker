import { Observable } from 'rxjs';
import Repository from '../Repository';
import User from '../../entities/account/User';

export default interface UserRepository extends Repository {
  createUser(user: User): Observable<[User, boolean]>
}
import {
  Observable,
  of
} from 'rxjs';
import User from '../../src/domain/entities/account/User';

const cache: Map<string, User> = new Map();
let id: number = 0;

export function reset(): void {
  id = 0;
  cache.clear();
}

export const mockCreateUser = jest.fn().mockImplementation((user: User): Observable<[User, boolean]> => {
  if (cache.has(user.email)) {
    return of([cache.get(user.email) as User, false]);
  } else {
    user.id = id.toString();
    id += 1;
    cache.set(user.email, user);
    return of([user, true]);
  }
});

const mockUserRepository = jest.fn().mockImplementation(() => {
  return {
    createUser: mockCreateUser,
  };
});

export default mockUserRepository;
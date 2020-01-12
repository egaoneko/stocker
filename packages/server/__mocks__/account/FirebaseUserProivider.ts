import {
  Observable,
  of
} from 'rxjs';
import User from '@stocker/core/lib/domain/entities/account/User';
import { DEFAULT_USER } from './constant';

const cache: Map<string, User> = new Map();
reset();

export function reset(): void {
  cache.clear();

  const user: User = DEFAULT_USER;
  cache.set(user.id, user)
}

export const mockFindUserById = jest.fn().mockImplementation((id: string): Observable<User | null> => {
  if (!cache.has(id)) {
    return of(null);
  }
  return of(cache.get(id) as User);
});

export const mockCreateUser = jest.fn().mockImplementation((user: User): Observable<[User, boolean]> => {
  return of([user, DEFAULT_USER.id === user.id]);
});

const mockFirebaseUserProvider = jest.fn().mockImplementation(() => {
  return {
    findUserById: mockFindUserById,
    createUser: mockCreateUser,
  };
});

export default mockFirebaseUserProvider;
import { of } from 'rxjs';
import User from '@stocker/core/lib/domain/entities/account/User';
import { DEFAULT_USER } from '../constant';

const cache: Map<string, User> = new Map();
reset();

export function reset(): void {
  cache.clear();

  const user: User = DEFAULT_USER;
  cache.set(user.id, user)
}

export const mockFindUserById = jest.fn().mockImplementation((id: string) => {
  if (!cache.has(id)) {
    return of(null);
  }
  return of(cache.get(id) as User);
});

const mockFirebaseUserProvider = jest.fn().mockImplementation(() => {
  return {
    findUserById: mockFindUserById
  };
});

export default mockFirebaseUserProvider;
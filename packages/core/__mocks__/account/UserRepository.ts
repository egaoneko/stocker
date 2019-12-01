import {
  Observable,
  of
} from 'rxjs';
import User from '../../src/domain/entities/account/User';
import { DEFAULT_USER } from '../constant';
import GetCurrentUserToken from '../../src/domain/use-cases/account/GetCurrentUserToken';

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

let currentUser: User | null;

export function setCurrentUser(user: User | null): void {
  currentUser = user
}

export const mockGetCurrentUser = jest.fn().mockImplementation((): Observable<User | null> => {
  return of(currentUser);
});

let currentUserToken: string | null;

export function setCurrentUserToken(token: string | null): void {
  currentUserToken = token
}

export const mockGetCurrentUserToken = jest.fn().mockImplementation((): Observable<string | null> => {
  return of(currentUserToken);
});

const mockUserRepository = jest.fn().mockImplementation(() => {
  return {
    findUserById: mockFindUserById,
    getCurrentUser: mockGetCurrentUser,
    getCurrentUserToken: mockGetCurrentUserToken,
  };
});

export default mockUserRepository;
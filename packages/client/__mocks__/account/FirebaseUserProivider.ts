import {
  of,
  Observable
} from 'rxjs';
import User from '@stocker/core/lib/domain/entities/account/User';
import { DEFAULT_USER } from './constant';

export const mockFindUserById = jest.fn().mockImplementation((id: string): Observable<User | null> => {
  if (DEFAULT_USER.id !== id) {
    return of(null);
  }

  return of(DEFAULT_USER);
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

const mockFirebaseUserProvider = jest.fn().mockImplementation(() => {
  return {
    findUserById: mockFindUserById,
    getCurrentUser: mockGetCurrentUser,
    getCurrentUserToken: mockGetCurrentUserToken,
  };
});

export default mockFirebaseUserProvider;
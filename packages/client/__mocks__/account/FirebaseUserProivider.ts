import { of, Observable } from 'rxjs';
import User from '@stocker/core/lib/domain/entities/account/User';

let currentUser: User | null;

export function setCurrentUser(user: User | null): void {
  currentUser = user
}

export const mockGetCurrentUser = jest.fn().mockImplementation((): Observable<User | null> => {
  return of(currentUser);
});

const mockFirebaseUserProvider = jest.fn().mockImplementation(() => {
  return {
    getCurrentUser: mockGetCurrentUser,
  };
});

export default mockFirebaseUserProvider;
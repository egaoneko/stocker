import {
  Observable,
  of
} from 'rxjs';
import User from '@stocker/core/lib/domain/entities/account/User';
import { DEFAULT_USER } from '../account/constant';

const validToken: string = 'valid';

export const mockVerifyToken = jest.fn().mockImplementation((token: string): Observable<boolean> => {
  return of(token === validToken);
});

export const mockDecodeToken = jest.fn().mockImplementation(<T>(token: string): Observable<T | null> => {
  if (validToken === token) {
    return of({} as T);
  } else {
    return of(null);
  }
});

export const mockFindUserByUid = jest.fn().mockImplementation((uid: string): Observable<User | null> => {
  if (DEFAULT_USER.id === uid) {
    return of(DEFAULT_USER);
  } else {
    return of(null);
  }
});

const mockFirebaseAuthProvider = jest.fn().mockImplementation(() => {
  return {
    verifyToken: mockVerifyToken,
    decodeToken: mockDecodeToken,
    findUserByUid: mockFindUserByUid,
  };
});

export default mockFirebaseAuthProvider;
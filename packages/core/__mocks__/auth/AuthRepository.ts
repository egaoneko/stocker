import {
  Observable,
  of
} from 'rxjs';
import User from '../../src/domain/entities/account/User';
import { DEFAULT_USER } from '../account/constant';

const validToken: string = 'valid';
const cache: Map<string, User> = new Map();
reset();

export function reset(): void {
  cache.clear();

  const user: User = DEFAULT_USER;
  cache.set(user.id, user)
}

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

export const mockFindUserByUid = jest.fn().mockImplementation((id: string): Observable<User | null> => {
  if (!cache.has(id)) {
    return of(null);
  }
  return of(cache.get(id) as User);
});


const mockAuthRepository = jest.fn().mockImplementation(() => {
  return {
    verifyToken: mockVerifyToken,
    decodeToken: mockDecodeToken,
    findUserByUid: mockFindUserByUid,
  };
});

export default mockAuthRepository;
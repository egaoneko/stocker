import {
  Observable,
  of
} from 'rxjs';

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

const mockAuthRepository = jest.fn().mockImplementation(() => {
  return {
    verifyToken: mockVerifyToken,
    decodeToken: mockDecodeToken,
  };
});

export default mockAuthRepository;
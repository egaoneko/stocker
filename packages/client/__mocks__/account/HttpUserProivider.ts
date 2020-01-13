import { of, Observable } from 'rxjs';
import { UserInterface } from '@stocker/core/lib/domain/entities/account/User';
import { DEFAULT_USER } from './constant';

export const mockCreateUser = jest.fn().mockImplementation((user: UserInterface): Observable<boolean> => {
  return of(DEFAULT_USER.id === user.id);
});

const mockHttpUserProvider = jest.fn().mockImplementation(() => {
  return {
    createUser: mockCreateUser,
  };
});

export default mockHttpUserProvider;
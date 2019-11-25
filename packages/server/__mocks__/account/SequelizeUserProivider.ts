import { of } from 'rxjs';
import User from '@stocker/core/lib/domain/entities/account/User';
import { Role } from '@stocker/core/lib/constant/account';

export const mockCreateUser = jest.fn().mockImplementation((user: User) => {
  user.id = '0';
  return of([user, true]);
});

const mockSequelizeUserProivider = jest.fn().mockImplementation(() => {
  return {
    createUser: mockCreateUser
  };
});

export default mockSequelizeUserProivider;
import mockFirebaseUserProvider, {
  mockGetCurrentUser,
  setCurrentUser
} from '../../../../__mocks__/account/FirebaseUserProivider';
import UserRepository from '../../../../data/repositories/account/UserRepository';
import User from '@stocker/core/lib/domain/entities/account/User';
import { Role } from '@stocker/core/lib/constant/account';
import { DEFAULT_USER } from '../../../../__mocks__/constant';

describe('UserRepository', () => {
  const repository: UserRepository = new UserRepository((new mockFirebaseUserProvider()) as any);

  beforeEach(() => {
    mockGetCurrentUser.mockClear();
  });

  test('getCurrentUser', (done) => {
    setCurrentUser(DEFAULT_USER);

    repository.getCurrentUser()
      .subscribe((user: User | null) => {
        if (!user) {
          throw 'Invalid User';
        }

        expect(mockGetCurrentUser).toHaveBeenCalledTimes(1);
        expect(user.id).toEqual(DEFAULT_USER.id);
        expect(user.email).toEqual(DEFAULT_USER.email);
        expect(user.name).toEqual(DEFAULT_USER.name);
        expect(user.role).toEqual(DEFAULT_USER.role);
        done();
      });
  });

  test('getCurrentUser with empty', (done) => {
    setCurrentUser(null);

    repository.getCurrentUser()
      .subscribe((user: User | null) => {
        expect(mockGetCurrentUser).toHaveBeenCalledTimes(1);
        expect(user).toBeNull();
        done();
      });
  });

  test('throw exception without findUserById', () => {
    expect(() => {
      repository.findUserById('').subscribe()
    }).toThrowError('findUserById is not supported.');
  });
});

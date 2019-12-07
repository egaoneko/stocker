import mockFirebaseUserProvider, { mockFindUserById } from '../../../../__mocks__/account/FirebaseUserProivider';
import UserRepository from '../../../../src/data/repositories/account/UserRepository';
import User from '@stocker/core/lib/domain/entities/account/User';
import { DEFAULT_USER } from '../../../../__mocks__/account/constant';

describe('UserRepository', () => {
  const repository: UserRepository = new UserRepository((new mockFirebaseUserProvider()) as any);

  beforeEach(() => {
    mockFindUserById.mockClear();
  });

  test('findUserById', (done) => {
    const uid: string = DEFAULT_USER.id;
    repository.findUserById(uid)
      .subscribe((user: User | null) => {
        if (!user) {
          throw 'Invalid User';
        }

        expect(mockFindUserById).toHaveBeenCalledTimes(1);
        expect(mockFindUserById).toBeCalledWith(uid);
        expect(user.id).toEqual(DEFAULT_USER.id);
        expect(user.email).toEqual(DEFAULT_USER.email);
        expect(user.name).toEqual(DEFAULT_USER.name);
        expect(user.role).toEqual(DEFAULT_USER.role);
        done();
      });
  });

  test('findUserById with unregistered user', (done) => {
    const uid: string = '1234';
    repository.findUserById(uid)
      .subscribe((user: User | null) => {
        expect(mockFindUserById).toHaveBeenCalledTimes(1);
        expect(mockFindUserById).toBeCalledWith(uid);
        expect(user).toBeNull();
        done();
      });
  });

  test('throw exception without createUser', () => {
    expect(() => {
      repository.createUser(DEFAULT_USER).subscribe()
    }).toThrowError('createUser is not supported.');
  });

  test('throw exception without getCurrentUser', () => {
    expect(() => {
      repository.getCurrentUser().subscribe()
    }).toThrowError('getCurrentUser is not supported.');
  });

  test('throw exception without getCurrentUserToken', () => {
    expect(() => {
      repository.getCurrentUserToken().subscribe()
    }).toThrowError('getCurrentUserToken is not supported.');
  });
});

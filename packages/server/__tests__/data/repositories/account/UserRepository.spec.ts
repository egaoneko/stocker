import mockFirebaseUserProvider, {
  mockFindUserById,
  mockCreateUser,
} from '../../../../__mocks__/account/FirebaseUserProivider';
import UserRepository from '../../../../src/data/repositories/account/UserRepository';
import User from '@stocker/core/lib/domain/entities/account/User';
import { DEFAULT_USER } from '../../../../__mocks__/account/constant';

describe('UserRepository', () => {
  const repository: UserRepository = new UserRepository((new mockFirebaseUserProvider()) as any);

  beforeEach(() => {
    mockFindUserById.mockClear();
    mockCreateUser.mockClear();
  });

  test('findUserById', async () => {
    const uid: string = DEFAULT_USER.id;
    const user: User | null = await repository.findUserById(uid).toPromise();

    if (!user) {
      throw 'Invalid User';
    }

    expect(mockFindUserById).toHaveBeenCalledTimes(1);
    expect(mockFindUserById).toBeCalledWith(uid);
    expect(user.id).toEqual(DEFAULT_USER.id);
    expect(user.email).toEqual(DEFAULT_USER.email);
    expect(user.name).toEqual(DEFAULT_USER.name);
    expect(user.role).toEqual(DEFAULT_USER.role);
  });

  test('findUserById with unregistered user', async () => {
    const uid: string = '1234';
    const user: User | null = await repository.findUserById(uid).toPromise();
    expect(mockFindUserById).toHaveBeenCalledTimes(1);
    expect(mockFindUserById).toBeCalledWith(uid);
    expect(user).toBeNull();
  });

  test('createUser', async () => {
    const [user, success]: [User, boolean] = await repository.createUser(DEFAULT_USER).toPromise();

    if (!user) {
      throw 'Invalid User';
    }

    expect(mockCreateUser).toHaveBeenCalledTimes(1);
    expect(mockCreateUser).toBeCalledWith(DEFAULT_USER);
    expect(success).toBeTruthy();
    expect(user.id).toEqual(DEFAULT_USER.id);
    expect(user.email).toEqual(DEFAULT_USER.email);
    expect(user.name).toEqual(DEFAULT_USER.name);
    expect(user.role).toEqual(DEFAULT_USER.role);
    expect(user.photo).toBe(DEFAULT_USER.photo);
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

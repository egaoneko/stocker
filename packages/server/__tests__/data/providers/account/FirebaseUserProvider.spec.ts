import '../../../__config__/firebase-admin';
import User from '@stocker/core/lib/domain/entities/account/User';
import FirebaseUserProvider from '../../../../src/data/providers/account/FirebaseUserProvider';
import { DEFAULT_USER } from '../../../../__mocks__/account/constant';

describe('FirebaseUserProvider', () => {
  const provider: FirebaseUserProvider = new FirebaseUserProvider();

  test('findUserById', async () => {
    const user: User | null = await provider.findUserById(DEFAULT_USER.id).toPromise();

    if (!user) {
      throw 'Invalid User';
    }

    expect(user.id).toEqual(DEFAULT_USER.id);
    expect(user.email).toEqual(DEFAULT_USER.email);
    expect(user.name).toEqual(DEFAULT_USER.name);
    expect(user.role).toEqual(DEFAULT_USER.role);
  });

  test('createUser', async () => {
    const [user, _]: [User, boolean] = await provider.createUser(DEFAULT_USER).toPromise();

    if (!user) {
      throw 'Invalid User';
    }

    expect(user.id).toBe(DEFAULT_USER.id);
    expect(user.email).toBe(DEFAULT_USER.email);
    expect(user.name).toBe(DEFAULT_USER.name);
    expect(user.role).toBe(DEFAULT_USER.role);
    expect(user.photo).toBe(DEFAULT_USER.photo);
  });
});

import '../../../__config__/firebase-admin';
import FirebaseAuthProvider from '../../../../src/data/providers/auth/FirebaseAuthProvider';
import { DEFAULT_USER } from '../../../../__mocks__/account/constant';
import User from '@stocker/core/lib/domain/entities/account/User';

describe('FirebaseAuthProvider', () => {
  const provider: FirebaseAuthProvider = new FirebaseAuthProvider();
  const token: string = '';

  test.skip('verifyToken', async () => {
    const valid: boolean = await provider.verifyToken(token).toPromise();
    expect(valid).toBeTruthy();
  });

  test('verifyToken with invalid', async () => {
    const valid: boolean = await provider.verifyToken('').toPromise();
    expect(valid).toBeFalsy();
  });

  test.skip('decodeToken', async () => {
    const uid: string | null = await provider.decodeToken(token).toPromise();

    if (!uid) {
      throw 'Invalid Token';
    }

    expect(uid).toEqual(DEFAULT_USER.id);
  });

  test('decodeToken with invalid', async () => {
    const uid: string | null = await provider.decodeToken('').toPromise();
    expect(uid).toBeNull();
  });

  test('findUserByUid', async () => {
    const user: User | null = await provider.findUserByUid(DEFAULT_USER.id).toPromise();

    if (!user) {
      throw 'Invalid User';
    }

    expect(user.id).toEqual(DEFAULT_USER.id);
  });
});

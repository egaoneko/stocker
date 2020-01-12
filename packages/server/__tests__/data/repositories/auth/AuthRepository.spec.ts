import mockFirebaseAuthProvider, {
  mockVerifyToken,
  mockDecodeToken,
  mockFindUserByUid,
} from '../../../../__mocks__/auth/FirebaseAuthProivider';
import AuthRepository from '../../../../src/data/repositories/auth/AuthRepository';
import { DEFAULT_USER } from '../../../../__mocks__/account/constant';
import User from '@stocker/core/lib/domain/entities/account/User';

describe('AuthRepository', () => {
  const repository: AuthRepository = new AuthRepository((new mockFirebaseAuthProvider()) as any);

  beforeEach(() => {
    mockVerifyToken.mockClear();
    mockDecodeToken.mockClear();
    mockFindUserByUid.mockClear();
  });

  test('verifyToken', async () => {
    const token: string = 'valid';
    const valid: boolean = await repository.verifyToken(token).toPromise();
    expect(mockVerifyToken).toHaveBeenCalledTimes(1);
    expect(mockVerifyToken).toBeCalledWith(token);
    expect(valid).toBeTruthy();
  });

  test('verifyToken with unregistered token', async () => {
    const token: string = 'invalid';
    const valid: boolean = await repository.verifyToken(token).toPromise();
    expect(mockVerifyToken).toHaveBeenCalledTimes(1);
    expect(mockVerifyToken).toBeCalledWith(token);
    expect(valid).toBeFalsy();
  });

  test('decodeToken', async () => {
    const token: string = 'valid';
    const uid: string | null = await repository.decodeToken(token).toPromise();
    expect(mockDecodeToken).toHaveBeenCalledTimes(1);
    expect(mockDecodeToken).toBeCalledWith(token);
    expect(uid).toBeTruthy();
  });

  test('decodeToken with unregistered token', async () => {
    const token: string = 'invalid';
    const uid: string | null = await repository.decodeToken(token).toPromise();
    expect(mockDecodeToken).toHaveBeenCalledTimes(1);
    expect(mockDecodeToken).toBeCalledWith(token);
    expect(uid).toBeNull();
  });

  test('findUserByUid', async () => {
    const user: User | null = await repository.findUserByUid(DEFAULT_USER.id).toPromise();

    if (!user) {
      throw 'Invalid User';
    }

    expect(mockFindUserByUid).toHaveBeenCalledTimes(1);
    expect(mockFindUserByUid).toBeCalledWith(DEFAULT_USER.id);
    expect(user.id).toBe(DEFAULT_USER.id);
  });

  test('mockFindUserByUid with unregistered uid', async () => {
    const user: User | null = await repository.findUserByUid('').toPromise();
    expect(mockFindUserByUid).toHaveBeenCalledTimes(1);
    expect(mockFindUserByUid).toBeCalledWith('');
    expect(user).toBeNull();
  });
});

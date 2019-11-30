import mockFirebaseAuthProvider, {
  mockVerifyToken,
  mockDecodeToken,
} from '../../../../__mocks__/auth/FirebaseAuthProivider';
import AuthRepository from '../../../../src/data/repositories/auth/AuthRepository';

describe('AuthRepository', () => {
  const repository: AuthRepository = new AuthRepository((new mockFirebaseAuthProvider()) as any);

  beforeEach(() => {
    mockVerifyToken.mockClear();
    mockDecodeToken.mockClear();
  });

  test('verifyToken', (done) => {
    const token: string = 'valid';
    repository.verifyToken(token)
      .subscribe((valid: boolean) => {
        expect(mockVerifyToken).toHaveBeenCalledTimes(1);
        expect(mockVerifyToken).toBeCalledWith(token);
        expect(valid).toBeTruthy();
        done();
      });
  });

  test('verifyToken with unregistered token', (done) => {
    const token: string = 'invalid';
    repository.verifyToken(token)
      .subscribe((valid: boolean) => {
        expect(mockVerifyToken).toHaveBeenCalledTimes(1);
        expect(mockVerifyToken).toBeCalledWith(token);
        expect(valid).toBeFalsy();
        done();
      });
  });

  test('decodeToken', (done) => {
    const token: string = 'valid';
    repository.decodeToken(token)
      .subscribe((uid: string | null) => {
        expect(mockDecodeToken).toHaveBeenCalledTimes(1);
        expect(mockDecodeToken).toBeCalledWith(token);
        expect(uid).toBeTruthy();
        done();
      });
  });

  test('decodeToken with unregistered token', (done) => {
    const token: string = 'invalid';
    repository.decodeToken(token)
      .subscribe((uid: string | null) => {
        expect(mockDecodeToken).toHaveBeenCalledTimes(1);
        expect(mockDecodeToken).toBeCalledWith(token);
        expect(uid).toBeNull();
        done();
      });
  });
});

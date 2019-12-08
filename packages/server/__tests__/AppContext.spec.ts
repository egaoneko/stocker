import './__config__/firebase';
import AppContext from '../src/AppContext';
import FirebaseUserProvider from '../src/data/providers/account/FirebaseUserProvider';
import UserRepository from '../src/data/repositories/account/UserRepository';
import FindUserById from '@stocker/core/lib/domain/use-cases/account/FindUserById';
import FirebaseAuthProvider from '../src/data/providers/auth/FirebaseAuthProvider';
import AuthRepository from '../src/data/repositories/auth/AuthRepository';
import VerifyToken from '@stocker/core/lib/domain/use-cases/auth/VerifyToken';
import DecodeToken from '@stocker/core/lib/domain/use-cases/auth/DecodeToken';

describe('AppContext', () => {
  const application: AppContext = new AppContext();

  test('User', () => {
    expect((application as any).providers.user).toBeInstanceOf(FirebaseUserProvider);
    expect((application as any).repositories.user).toBeInstanceOf(UserRepository);
    expect((application as any).useCases.findUserById).toBeInstanceOf(FindUserById);
  });

  test('Auth', () => {
    expect((application as any).providers.auth).toBeInstanceOf(FirebaseAuthProvider);
    expect((application as any).repositories.auth).toBeInstanceOf(AuthRepository);
    expect((application as any).useCases.verifyToken).toBeInstanceOf(VerifyToken);
    expect((application as any).useCases.decodeToken).toBeInstanceOf(DecodeToken);
  });
});

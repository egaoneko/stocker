import User from '@stocker/core/lib/domain/entities/account/User';
import FirebaseUserProvider from '../../../../../data/ui/providers/account/FirebaseUserProvider';
import { DEFAULT_USER } from '../../../../../__mocks__/constant';
import firebase from '../../../../../libs/firebase';

describe('FirebaseUserProvider', () => {
  const provider: FirebaseUserProvider = new FirebaseUserProvider();

  test('getCurrentUser', async () => {
    const user: User | null = await provider.getCurrentUser().toPromise();

    if (firebase.auth().currentUser) {
      if (!user) {
        throw 'Invalid User';
      }

      expect(user.id).toEqual(DEFAULT_USER.id);
      expect(user.email).toEqual(DEFAULT_USER.email);
      expect(user.name).toEqual(DEFAULT_USER.name);
      expect(user.role).toEqual(DEFAULT_USER.role);
    } else {
      expect(user).toBeNull();
    }
  });
});

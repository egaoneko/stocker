import User from '@stocker/core/lib/domain/entities/account/User';
import FirebaseUserProvider from '../../../../../data/firebase/providers/account/FirebaseUserProvider';
import {
  DEFAULT_USER,
} from '../../../../../__mocks__/constant';
import firebase from '../../../../../libs/firebase';

describe('FirebaseUserProvider', () => {
  const provider: FirebaseUserProvider = new FirebaseUserProvider();

  test.skip('createUser', async () => {
    const success: boolean = await provider.createUser(DEFAULT_USER).toPromise();
    expect(success).toBeTruthy();

    const userRef: firebase.database.Reference = firebase.database().ref('users/' + DEFAULT_USER.id);
    const dataSnapShot: firebase.database.DataSnapshot = await userRef.once('value');
    expect(dataSnapShot.hasChildren()).toBeTruthy();
    const err: any = await userRef.remove();
    expect(err).toBeFalsy();
  });


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
      expect(user.photo).toEqual(DEFAULT_USER.photo);
      expect(user.provider).toEqual(DEFAULT_USER.provider);
    } else {
      expect(user).toBeNull();
    }
  });

  test('getCurrentUserToken', async () => {
    const token: string | null = await provider.getCurrentUserToken().toPromise();

    const user: firebase.User | null = firebase.auth().currentUser;
    if (user) {
      if (!token) {
        throw 'Invalid token';
      }

      const t: string = await user.getIdToken();
      expect(token).toEqual(t);
    } else {
      expect(token).toBeNull();
    }
  });
});

import { Observable } from 'rxjs';
import { fromPromise } from 'rxjs/internal-compatibility';
import firebase from '../../../../libs/firebase';

export default class FirebaseAuthProvider {
  public verifyToken(token: string): Observable<boolean> {
    return fromPromise(
      firebase.auth().verifyIdToken(token)
        .then((decodedIdToken: firebase.auth.DecodedIdToken): boolean => {
          return !!decodedIdToken;
        })
        .catch((reason: any): boolean => false)
    );
  }

  public decodeToken(token: string): Observable<string | null> {
    return fromPromise(
      firebase.auth().verifyIdToken(token)
        .then((decodedIdToken: firebase.auth.DecodedIdToken): string | null => {
          if (!decodedIdToken) {
            return null;
          }
          return decodedIdToken.uid;
        })
        .catch((reason: any): null => null)
    );
  }
}
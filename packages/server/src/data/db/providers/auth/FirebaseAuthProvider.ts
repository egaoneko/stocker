import { Observable } from 'rxjs';
import { fromPromise } from 'rxjs/internal-compatibility';
import admin from '../../../../libs/firebase-admin';

export default class FirebaseAuthProvider {
  public verifyToken(token: string): Observable<boolean> {
    return fromPromise(
      admin.auth().verifyIdToken(token)
        .then((decodedIdToken: admin.auth.DecodedIdToken): boolean => {
          return !!decodedIdToken;
        })
        .catch((reason: any): boolean => false)
    );
  }

  public decodeToken(token: string): Observable<string | null> {
    return fromPromise(
      admin.auth().verifyIdToken(token)
        .then((decodedIdToken: admin.auth.DecodedIdToken): string | null => {
          if (!decodedIdToken) {
            return null;
          }
          return decodedIdToken.uid;
        })
        .catch((reason: any): null => null)
    );
  }
}
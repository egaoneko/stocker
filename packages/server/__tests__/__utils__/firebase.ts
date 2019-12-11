import axios, { AxiosResponse } from 'axios';
import admin from '../__config__/firebase-admin';

interface ApiResponse {
  idToken: string,
  refreshToken: string,
  expiresIn: string,
}

export async function getIdToken(uid: string): Promise<string> {
  const customToken: string = await admin.auth().createCustomToken(uid);
  return await axios({
    url: `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyCustomToken?key=AIzaSyA9Mj3huKl-TMxlv0xeIuTFcqEcq8DXp9k`,
    method: 'POST',
    data: {
      token: customToken,
      returnSecureToken: true
    },
  }).then((response: AxiosResponse<ApiResponse>): string => {
    return response.data.idToken;
  });
}
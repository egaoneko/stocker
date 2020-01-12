import HttpUserProvider from '../../../../data/providers/account/HttpUserProvider';
import {
  DEFAULT_USER,
} from '../../../../__mocks__/account/constant';
import mockAxiosInstance from '../../../../__mocks__/account/UserAxiosInstance';

describe('HttpUserProvider', () => {
  const provider: HttpUserProvider = new HttpUserProvider(mockAxiosInstance as any);

  beforeEach(() => {
    mockAxiosInstance.mockClear();
  });

  test('createUser', async () => {
    const success: boolean = await provider.createUser(DEFAULT_USER).toPromise();
    expect(success).toBeTruthy();
    expect(mockAxiosInstance).toBeCalledTimes(1);
  });
});

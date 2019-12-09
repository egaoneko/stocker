import { KR } from '../../src/constants/nation';

describe('nation constant', () => {
  test('KOR', () => {
    expect(KR.name).toEqual('KOREA');
    expect(KR.code).toEqual('KR');
  });
});

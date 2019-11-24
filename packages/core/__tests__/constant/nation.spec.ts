import { KOR } from '../../src/constant/nation';

describe('nation constant', () => {
  test('KOR', () => {
    expect(KOR.name).toEqual('KOREA');
    expect(KOR.code).toEqual('KR');
  });
});

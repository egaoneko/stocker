import { KOSPI } from '../../src/constants/market';
import { KOSDAQ } from '../../src/constants/market';
import { KOR } from '../../src/constants/nation';

describe('market constant', () => {
  test('KOSPI', () => {
    expect(KOSPI.name).toEqual('KOSPI');
    expect(KOSPI.nation).toEqual(KOR);
  });

  test('KOSDAQ', () => {
    expect(KOSDAQ.name).toEqual('KOSDAQ');
    expect(KOSDAQ.nation).toEqual(KOR);
  });
});

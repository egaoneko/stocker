import { KOSPI } from '../../src/constant/market';
import { KOSDAQ } from '../../src/constant/market';
import { KOR } from '../../src/constant/nation';

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

import { KOSPI } from '../../src/constant/market';
import { KOSDAQ } from '../../lib/constant/market';
import { KOR } from '../../src/constant/nation';

describe('market constant', () => {
  test('KOSPI', () => {
    expect(KOSPI.name).toBe('KOSPI');
    expect(KOSPI.nation).toEqual(KOR);
  });

  test('KOSDAQ', () => {
    expect(KOSDAQ.name).toBe('KOSDAQ');
    expect(KOSDAQ.nation).toEqual(KOR);
  });
});

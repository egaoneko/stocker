import {
  KOSDAQ,
  KOSPI
} from '../../../src/stock-item/naver/constant';
import { KOR } from '@stocker/core/lib/constant/nation';

describe('market constant', () => {
  test('KOSPI', () => {
    expect(KOSPI.name).toEqual('KOSPI');
    expect(KOSPI.nation).toEqual(KOR);
    expect(KOSPI.code).toEqual('0');
  });

  test('KOSDAQ', () => {
    expect(KOSDAQ.name).toEqual('KOSDAQ');
    expect(KOSDAQ.nation).toEqual(KOR);
    expect(KOSDAQ.code).toEqual('1');
  });
});

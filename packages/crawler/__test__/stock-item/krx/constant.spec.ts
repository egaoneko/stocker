import { KOR } from '@stocker/core/lib/constant/nation';
import {
  KOSDAQ,
  KOSPI
} from '../../../src/stock-item/krx/constant';

describe('market constant', () => {
  test('KOSPI', () => {
    expect(KOSPI.name).toEqual('KOSPI');
    expect(KOSPI.nation).toEqual(KOR);
    expect(KOSPI.code).toEqual('코스피');
  });

  test('KOSDAQ', () => {
    expect(KOSDAQ.name).toEqual('KOSDAQ');
    expect(KOSDAQ.nation).toEqual(KOR);
    expect(KOSDAQ.code).toEqual('코스닥');
  });
});

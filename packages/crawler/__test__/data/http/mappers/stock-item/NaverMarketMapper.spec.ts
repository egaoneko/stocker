import {
  KOSDAQ,
  KOSPI
} from '@stocker/core/lib/constant/market';
import NaverMarketMapper from '../../../../../src/data/http/mappers/stock-item/NaverMarketMapper';
import {
  NaverKOSDAQ,
  NaverKOSPI
} from '../../../../../src/stock-item/constant';

describe('NaverMarketMapper', () => {
  const mapper: NaverMarketMapper = new NaverMarketMapper();

  test('KOSPI', () => {
    expect(mapper.toEntity(KOSPI)).toEqual(NaverKOSPI);
  });

  test('KOSDAQ', () => {
    expect(mapper.toEntity(KOSDAQ)).toEqual(NaverKOSDAQ);
  });

  test('null', () => {
    expect(mapper.toEntity({} as any)).toBeNull();
  });
});

import {
  KOSDAQ,
  KOSPI
} from '@stocker/core/lib/constant/market';
import {
  KOSPI as NaverKOSPI,
  KOSDAQ as NaverKOSDAQ
} from '../../../../../../src/stock-item/naver/constant';
import NaverMarketMapper from '../../../../../../src/stock-item/naver/data/http/mappers/NaverMarketMapper';

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

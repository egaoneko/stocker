import {
  KOSDAQ,
  KOSPI
} from '@stocker/core/lib/constant/market';
import {
  KOSPI as KrxKOSPI,
  KOSDAQ as KrxKOSDAQ
} from '../../../../../../src/stock-item/krx/constant';
import KrxMarketMapper from '../../../../../../src/stock-item/krx/data/http/mappers/KrxMarketMapper';

describe('KrxMarketMapper', () => {
  const mapper: KrxMarketMapper = new KrxMarketMapper();

  test('KOSPI', () => {
    expect(mapper.toEntity(KOSPI)).toEqual(KrxKOSPI);
  });

  test('KOSDAQ', () => {
    expect(mapper.toEntity(KOSDAQ)).toEqual(KrxKOSDAQ);
  });

  test('null', () => {
    expect(mapper.toEntity({} as any)).toBeNull();
  });
});

import {
  KOSDAQ,
  KOSPI
} from '@stocker/core/lib/constant/market';
import KrxMarketMapper from '../../../../../src/data/http/mappers/stock-item/KrxMarketMapper';
import {
  KrxKOSDAQ,
  KrxKOSPI
} from '../../../../../src/stock-item/constant';

describe('KrxMarketMapper', () => {
  const mapper: KrxMarketMapper = new KrxMarketMapper();

  test('KOSPI', () => {
    expect(mapper.toEntity(KrxKOSPI)).toEqual(KrxKOSPI);
  });

  test('KOSDAQ', () => {
    expect(mapper.toEntity(KrxKOSDAQ)).toEqual(KrxKOSDAQ);
  });

  test('null', () => {
    expect(mapper.toEntity({} as any)).toBeNull();
  });
});

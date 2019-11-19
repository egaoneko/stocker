import KrxStockItemMapper from '../../../../../../src/stock-item/krx/data/http/mappers/KrxStockItemMapper';
import {
  KOSDAQ,
  KOSPI
} from '../../../../../../src/stock-item/krx/constant';

describe('KrxStockItemMapper', () => {
  const mapper: KrxStockItemMapper = new KrxStockItemMapper();

  test('KOSPI', () => {
    const row: string[] = [
      '코스피',
      '030720',
      '동원수산',
      '어업',
      '9,720',
      '80',
      '45,234,984,600'
    ];
    expect(mapper.toEntity(row, KOSPI).code).toEqual(row[1]);
    expect(mapper.toEntity(row, KOSPI).name).toEqual(row[2]);
    expect(mapper.toEntity(row, KOSPI).market).toEqual(KOSPI);
  });

  test('KOSDAQ', () => {
    const row: string[] = [
      '코스닥',
      '293780',
      '압타바이오',
      '기타서비스',
      '19,650',
      '1,150',
      '213,826,053,450'
    ];
    expect(mapper.toEntity(row, KOSDAQ).code).toEqual(row[1]);
    expect(mapper.toEntity(row, KOSDAQ).name).toEqual(row[2]);
    expect(mapper.toEntity(row, KOSDAQ).market).toEqual(KOSDAQ);
  });
});

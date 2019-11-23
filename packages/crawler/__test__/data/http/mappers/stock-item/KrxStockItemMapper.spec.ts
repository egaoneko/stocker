import KrxStockItemMapper from '../../../../../src/data/http/mappers/stock-item/KrxStockItemMapper';
import {
  KOSDAQ,
  KOSPI
} from '@stocker/core/lib/constant/market';

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
    expect(mapper.toEntity(row).market).toEqual(KOSPI);
    expect(mapper.toEntity(row).code).toEqual(row[1]);
    expect(mapper.toEntity(row).name).toEqual(row[2]);
    expect(mapper.toEntity(row).gics).toEqual(row[3]);
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
    expect(mapper.toEntity(row).market).toEqual(KOSDAQ);
    expect(mapper.toEntity(row).code).toEqual(row[1]);
    expect(mapper.toEntity(row).name).toEqual(row[2]);
    expect(mapper.toEntity(row).gics).toEqual(row[3]);
  });

  test('Unsupported Markget', () => {
    const row: string[] = [
      '나스닥',
      '293780',
      '압타바이오',
      '기타서비스',
      '19,650',
      '1,150',
      '213,826,053,450'
    ];
    expect(() => mapper.toEntity(row).market).toThrowError('Unsupported market.');
  });
});

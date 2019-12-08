import MarketTypeMapper from '../../../../src/data/mappers/market/MarketTypeMapper';
import { MarketType } from '../../../../src/enums/market';
import {
  KOSDAQ,
  KOSPI
} from '@stocker/core/lib/constants/market';
import Market from '@stocker/core/lib/domain/entities/market/Market';

describe('MarketTypeMapper', () => {
  const mapper: MarketTypeMapper = new MarketTypeMapper();

  test('toEntity KR_KOSPI', () => {
    expect(mapper.toEntity(MarketType.KR_KOSPI)).toBe(KOSPI);
  });

  test('toEntity KR_KOSDAQ', () => {
    expect(mapper.toEntity(MarketType.KR_KOSDAQ)).toBe(KOSDAQ);
  });

  test('throw exception with toEntity default', () => {
    expect(() => {
      mapper.toEntity('default' as MarketType)
    }).toThrowError('default is not supported.');
  });

  test('toValue KOSPI', () => {
    expect(mapper.toValue(KOSPI)).toBe(MarketType.KR_KOSPI);
  });

  test('toValue KOSDAQ', () => {
    expect(mapper.toValue(KOSDAQ)).toBe(MarketType.KR_KOSDAQ);
  });

  test('throw exception with toValue default', () => {
    expect(() => {
      mapper.toValue({} as Market)
    }).toThrowError('market is not supported.');
  });
});

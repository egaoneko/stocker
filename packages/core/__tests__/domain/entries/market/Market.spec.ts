import Market from '../../../../src/domain/entities/market/Market';
import {
  KR,
  US
} from '../../../../src/constants/nation';

describe('Market', () => {
  test('equal', () => {
    const market: Market = new Market('KOSPI', KR);
    expect(market.equal(new Market('KOSPI', KR))).toBeTruthy();
    expect(market.equal(new Market('KOSDAQ', KR))).toBeFalsy();
    expect(market.equal(new Market('NASDAQ', US))).toBeFalsy();
  });

  test('clone', () => {
    const market: Market = new Market('KOSPI', KR);
    const clone: Market = market.clone();
    expect(clone.name).toBe(market.name);
    expect(clone.nation).toBe(market.nation);
  });

  test('toString', () => {
    const market: Market = new Market('KOSPI', KR);
    expect(market.toString()).toBe([
      market.name,
      market.nation,
    ].join(','));
  });
});

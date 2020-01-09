import Market, { MarketInterface } from '../../../../src/domain/entities/market/Market';
import MarketJSONMapper from '../../../../src/data/mappers/market/MarketJSONMapper';
import Nation from '../../../../src/domain/entities/nation/Nation';

describe('MarketJSONMapper', () => {
  const mapper: MarketJSONMapper = new MarketJSONMapper();
  const json: MarketInterface = {
    name: 'Test',
    nation: {
      code: '0',
      name: 'Test',
    }
  };
  const entity: Market = new Market('Test', new Nation('0', 'Test'));

  test('toEntity', () => {
    expect(mapper.toEntity(json).equal(entity)).toBeTruthy();
  });

  test('toEntity with wrong json', () => {
    expect(() => mapper.toEntity({} as any)).toThrowError('Invalid json');
  });

  test('toJSON', () => {
    expect(mapper.toJSON(entity)).toEqual(json);
  });
});

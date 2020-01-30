import StockItem, { StockItemInterface } from '../../../../src/domain/entities/stock-item/StockItem';
import StockItemJSONMapper from '../../../../src/data/mappers/stock-item/StockItemJSONMapper';
import {
  StockItemState
} from '../../../../src/enums/stock-item';
import { KOSPI } from '../../../../src/constants/market';

describe('StockItemJSONMapper', () => {
  const mapper: StockItemJSONMapper = new StockItemJSONMapper();
  const json: StockItemInterface = {
    id: '0',
    code: '0',
    name: 'Test',
    market: {
      name: 'KOSPI',
      nation: {
        code: 'KR',
        name: 'KOREA',
      }
    },
    gics: '1',
    wics: '2',
    corpCode: '0',
    state: 'NONE',
  };
  const entity: StockItem = new StockItem(
    '0',
    'Test'
  );
  entity.id = '0';
  entity.market = KOSPI;
  entity.gics = '1';
  entity.wics = '2';
  entity.corpCode = '0';
  entity.state = StockItemState.NONE;

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

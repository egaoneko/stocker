import StockItem from '../../../../src/domain/entities/stock-item/StockItem';
import {
  KOSDAQ,
  KOSPI
} from '../../../../src/constants/market';
import { StockItemState } from '../../../../src/enums/stock-item';

describe('StockItem', () => {
  test('equal', () => {
    const actual: StockItem = new StockItem('0', 'Test');
    actual.market = KOSPI;

    let expected: StockItem;
    expected = new StockItem('0', 'Test');
    expected.market = KOSPI;
    expect(actual.equal(expected)).toBeTruthy();

    expected = new StockItem('1', 'Test');
    expected.market = KOSPI;
    expect(actual.equal(expected)).toBeFalsy();

    expected = new StockItem('0', 'T');
    expected.market = KOSPI;
    expect(actual.equal(expected)).toBeFalsy();

    expected = new StockItem('0', 'Test');
    expected.market = KOSDAQ;
    expect(actual.equal(expected)).toBeFalsy();

    expected = new StockItem('0', 'Test');
    expect(actual.equal(expected)).toBeFalsy();
  });

  test('clone', () => {
    const stockItem: StockItem = new StockItem('0', 'Test');
    stockItem.id = '0';
    stockItem.market = KOSPI;
    stockItem.gics = '1';
    stockItem.wics = '2';
    stockItem.corpCode = '0';
    stockItem.state = StockItemState.NONE;

    const clone: StockItem = stockItem.clone();
    expect(clone.id).toBe(stockItem.id);
    expect(clone.code).toBe(stockItem.code);
    expect(clone.name).toBe(stockItem.name);
    expect(clone.market).toBe(stockItem.market);
    expect(clone.gics).toBe(stockItem.gics);
    expect(clone.wics).toBe(stockItem.wics);
    expect(clone.corpCode).toBe(stockItem.corpCode);
    expect(clone.state).toBe(stockItem.state);
  });

  test('toString', () => {
    const stockItem: StockItem = new StockItem('0', 'Test');
    stockItem.id = '0';
    stockItem.market = KOSPI;
    stockItem.gics = '1';
    stockItem.wics = '2';
    stockItem.corpCode = '0';
    stockItem.state = StockItemState.NONE;

    expect(stockItem.toString()).toBe([
      stockItem.id,
      stockItem.code,
      stockItem.name,
      stockItem.market && stockItem.market.name,
      stockItem.gics,
      stockItem.wics,
      stockItem.corpCode,
      stockItem.state,
    ].join(','));
  });
});

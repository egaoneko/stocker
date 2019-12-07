import StockItem from '../../../../src/domain/entities/stock-item/StockItem';
import { KOSPI } from '../../../../src/constants/market';

describe('StockItem', () => {
  test('equal', () => {
    const stockItem: StockItem = new StockItem('0', 'Test');
    expect(stockItem.equal(new StockItem('0', 'T'))).toBeTruthy();
    expect(stockItem.equal(new StockItem('1', 'Test'))).toBeFalsy();
  });

  test('clone', () => {
    const stockItem: StockItem = new StockItem('0', 'Test');
    stockItem.market = KOSPI;
    stockItem.gics = '1';
    stockItem.wics = '2';

    const clone: StockItem = stockItem.clone();
    expect(clone.code).toBe(stockItem.code);
    expect(clone.name).toBe(stockItem.name);
    expect(clone.market).toBe(stockItem.market);
    expect(clone.gics).toBe(stockItem.gics);
    expect(clone.wics).toBe(stockItem.wics);
  });

  test('toString', () => {
    const stockItem: StockItem = new StockItem('0', 'Test');
    stockItem.market = KOSPI;
    stockItem.gics = '1';
    stockItem.wics = '2';

    expect(stockItem.toString()).toBe('[0, Test, KOSPI, 1, 2]');
  });
});

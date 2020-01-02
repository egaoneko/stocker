import '../../../__config__/sequelize';
import StockItem from '../../../../src/data/models/stock-item/StockItem';
import MarketTypeMapper from '../../../../src/data/mappers/market/MarketTypeMapper';
import Market from '@stocker/core/lib/domain/entities/market/Market';
import StockItemEntity from '@stocker/core/lib/domain/entities/stock-item/StockItem';
import { DEFAULT_STOCK_ITEM } from '../../../../__mocks__/stock-item/constant';

describe('StockItem Model', () => {

  test('toEntity', () => {
    const stockItem: StockItem = new StockItem();
    stockItem.id = DEFAULT_STOCK_ITEM.id as string;
    stockItem.code = DEFAULT_STOCK_ITEM.code;
    stockItem.name = DEFAULT_STOCK_ITEM.name;
    stockItem.market = new MarketTypeMapper().toValue(DEFAULT_STOCK_ITEM.market as Market);
    stockItem.gics = DEFAULT_STOCK_ITEM.gics;
    stockItem.wics = DEFAULT_STOCK_ITEM.wics;
    stockItem.state = DEFAULT_STOCK_ITEM.state;

    const stockItemEntity: StockItemEntity = stockItem.toEntity();

    expect(stockItem.id).toEqual(stockItemEntity.id);
    expect(stockItem.code).toEqual(stockItemEntity.code);
    expect(stockItem.name).toEqual(stockItemEntity.name);
    expect(stockItem.market).toEqual(new MarketTypeMapper().toValue(stockItemEntity.market as Market));
    expect(stockItem.gics).toEqual(stockItemEntity.gics);
    expect(stockItem.wics).toEqual(stockItemEntity.wics);
    expect(stockItem.state).toEqual(stockItemEntity.state);
  });

  test('createStockItem', async () => {
    const [stockItem, created]: [StockItem, boolean] = await StockItem.createStockItem(DEFAULT_STOCK_ITEM);
    expect(created).toBeTruthy();

    const deletedRows: number = await StockItem.deleteStockItem(stockItem.toEntity());
    expect(deletedRows).toBe(1);
  });

  test('updateStockItem', async () => {
    const [stockItem, created] = await StockItem.createStockItem(DEFAULT_STOCK_ITEM);

    if (!created) {
      throw 'Does not created';
    }

    const newStockItem: StockItemEntity = stockItem.toEntity().clone();

    const [rows]: [number, StockItem[]] = await StockItem.updateStockItem(newStockItem);
    expect(rows).toBe(1);

    const deletedRows: number = await StockItem.deleteStockItem(stockItem.toEntity());
    expect(deletedRows).toBe(1);
  });

  test('updateStockItem without id', () => {
    expect(() => {
      const newStockItem: StockItemEntity = DEFAULT_STOCK_ITEM.clone();
      newStockItem.id = '';
      StockItem.updateStockItem(newStockItem);
    }).toThrowError('id is empty.');
  });

  test('updateStockItem with unknown id', async () => {
    const stockItem: StockItemEntity = DEFAULT_STOCK_ITEM.clone();
    const [rows]: [number, StockItem[]] = await StockItem.updateStockItem(stockItem);
    expect(rows).toBe(0);
  });

  test('deleteStockItem', async () => {
    const [stockItem, created] = await StockItem.createStockItem(DEFAULT_STOCK_ITEM);

    if (!created) {
      throw 'Does not created';
    }

    const rows: number = await StockItem.deleteStockItem(stockItem.toEntity());
    expect(rows).toBe(1);
  });

  test('deleteStockItem without id', () => {
    expect(() => {
      const stockItem: StockItemEntity = DEFAULT_STOCK_ITEM.clone();
      stockItem.id = '';
      StockItem.deleteStockItem(stockItem);
    }).toThrowError('id is empty.');
  });

  test('deleteStockItem with unknown id', async () => {
    const stockItem: StockItemEntity = DEFAULT_STOCK_ITEM.clone();
    const rows: number = await StockItem.deleteStockItem(stockItem);
    expect(rows).toBe(0);
  });

  test('findStockItemsBy', async () => {
    const [stockItem, created] = await StockItem.createStockItem(DEFAULT_STOCK_ITEM);

    if (!created) {
      throw 'Does not created';
    }

    const stockItems: StockItem[] | null = await StockItem.findStockItemsBy({});

    if (!stockItems) {
      throw 'Does not created';
    }

    expect(stockItems.length).toBe(1);
    expect(stockItems[0].code).toBe(stockItem.code);

    const rows: number = await StockItem.deleteStockItem(stockItem.toEntity());
    expect(rows).toBe(1);
  });

  test('findStockItemsBy with unknown id', async () => {
    const [stockItem, created] = await StockItem.createStockItem(DEFAULT_STOCK_ITEM);

    if (!created) {
      throw 'Does not created';
    }

    const stockItems: StockItem[] | null = await StockItem.findStockItemsBy({
      id: 'ea37d172-cc7b-4c26-be53-47bd02a5e327',
    });

    if (stockItems) {
      expect(stockItems.length).toBe(0);
    } else {
      expect(stockItems).toBeNull();
    }

    const rows: number = await StockItem.deleteStockItem(stockItem.toEntity());
    expect(rows).toBe(1);
  });

  test('countStockItems', async () => {
    const [stockItem, created] = await StockItem.createStockItem(DEFAULT_STOCK_ITEM);

    if (!created) {
      throw 'Does not created';
    }

    const count: number = await StockItem.countStockItems({});
    expect(count).toBeGreaterThan(0);

    const rows: number = await StockItem.deleteStockItem(stockItem.toEntity());
    expect(rows).toBe(1);
  });

  test('countStockItems with unknown id', async () => {
    const [stockItem, created] = await StockItem.createStockItem(DEFAULT_STOCK_ITEM);

    if (!created) {
      throw 'Does not created';
    }

    const count: number = await StockItem.countStockItems({
      id: 'ea37d172-cc7b-4c26-be53-47bd02a5e327'
    });
    expect(count).toBe(0);

    const rows: number = await StockItem.deleteStockItem(stockItem.toEntity());
    expect(rows).toBe(1);
  });
});

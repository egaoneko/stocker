import '../../../__config__/sequelize';
import SequelizeStockItemProvider from '../../../../src/data/providers/stock-item/SequelizeStockItemProvider';
import { DEFAULT_STOCK_ITEM } from '../../../../__mocks__/stock-item/constant';
import StockItem from '@stocker/core/lib/domain/entities/stock-item/StockItem';

describe('SequelizeStockItemProvider', () => {
  const provider: SequelizeStockItemProvider = new SequelizeStockItemProvider();

  test('createStockItem', async () => {
    const [stockItem, created]: [StockItem, boolean] = await provider.createStockItem(DEFAULT_STOCK_ITEM).toPromise();
    expect(created).toBeTruthy();

    const [deletedStockItem, deleted]: [StockItem, boolean] = await provider.deleteStockItem(stockItem).toPromise();
    expect(deleted).toBeTruthy();
  });

  test('updateStockItem', async () => {
    const [stockItem, created]: [StockItem, boolean] = await provider.createStockItem(DEFAULT_STOCK_ITEM).toPromise();

    if (!created) {
      throw 'Does not created';
    }

    const [updatedStockItem, updated]: [StockItem, boolean] = await provider.updateStockItem(stockItem).toPromise();

    expect(updated).toBeTruthy();

    const [deletedStockItem, deleted]: [StockItem, boolean] = await provider.deleteStockItem(stockItem).toPromise();
    expect(deleted).toBeTruthy();
  });

  test('deleteStockItem', async () => {
    const [stockItem, created]: [StockItem, boolean] = await provider.createStockItem(DEFAULT_STOCK_ITEM).toPromise();

    if (!created) {
      throw 'Does not created';
    }

    const [deletedStockItem, deleted]: [StockItem, boolean] = await provider.deleteStockItem(stockItem).toPromise();

    expect(deleted).toBeTruthy();
  });

  test('findStockItemsBy', async () => {
    const [stockItem, created]: [StockItem, boolean] = await provider.createStockItem(DEFAULT_STOCK_ITEM).toPromise();

    if (!created) {
      throw 'Does not created';
    }

    const stockItems: StockItem[] = await provider.findStockItemsBy({}).toPromise();

    if (!stockItems) {
      throw 'Does not created';
    }

    expect(stockItems.length).toBeGreaterThan(0);
    expect(stockItems[0].code).toBe(stockItem.code);

    const [deletedStockItem, deleted]: [StockItem, boolean] = await provider.deleteStockItem(stockItem).toPromise();
    expect(deleted).toBeTruthy();
  });

  test('countStockItems', async () => {
    const [stockItem, created]: [StockItem, boolean] = await provider.createStockItem(DEFAULT_STOCK_ITEM).toPromise();

    if (!created) {
      throw 'Does not created';
    }

    const count: number = await provider.countStockItems({}).toPromise();
    expect(count).toBeGreaterThan(0);

    const [deletedStockItem, deleted]: [StockItem, boolean] = await provider.deleteStockItem(stockItem).toPromise();
    expect(deleted).toBeTruthy();
  });

});
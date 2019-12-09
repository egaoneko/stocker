import '../../../__config__/sequelize';
import { rollback } from '../../../__utils__/db';
import { Transaction } from 'sequelize';
import SequelizeStockItemProvider from '../../../../src/data/providers/stock-item/SequelizeStockItemProvider';
import { DEFAULT_STOCK_ITEM } from '../../../../__mocks__/stock-item/constant';
import StockItem from '@stocker/core/lib/domain/entities/stock-item/StockItem';

describe('SequelizeStockItemProvider', () => {
  const provider: SequelizeStockItemProvider = new SequelizeStockItemProvider();

  test('createStockItem', async () => {
    await rollback(async (transaction: Transaction) => {
      const [stockItem, created]: [StockItem, boolean] = await provider.createStockItem(DEFAULT_STOCK_ITEM, transaction).toPromise();
      expect(created).toBeTruthy();
    });
  });

  test('updateStockItem', async () => {
    await rollback(async (transaction: Transaction) => {
      const [stockItem, created]: [StockItem, boolean] = await provider.createStockItem(DEFAULT_STOCK_ITEM, transaction).toPromise();

      if (!created) {
        throw 'Does not created';
      }

      const [updatedStockItem, updated]: [StockItem, boolean] = await provider.updateStockItem(stockItem, transaction).toPromise();

      expect(updated).toBeTruthy();
    });
  });

  test('deleteStockItem', async () => {
    await rollback(async (transaction: Transaction) => {
      const [stockItem, created]: [StockItem, boolean] = await provider.createStockItem(DEFAULT_STOCK_ITEM, transaction).toPromise();

      if (!created) {
        throw 'Does not created';
      }

      const [deletedStockItem, deleted]: [StockItem, boolean] = await provider.deleteStockItem(stockItem, transaction).toPromise();

      expect(deleted).toBeTruthy();
    });
  });

  test('findStockItemsBy', async () => {
    const [stockItem, created]: [StockItem, boolean] = await provider.createStockItem(DEFAULT_STOCK_ITEM).toPromise();

    if (!created) {
      throw 'Does not created';
    }

    const stockItems: StockItem[] | null = await provider.findStockItemsBy({}).toPromise();

    if (!stockItems) {
      throw 'Does not created';
    }

    expect(stockItems.length).toBe(1);
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
    expect(count).toBe(1);

    const [deletedStockItem, deleted]: [StockItem, boolean] = await provider.deleteStockItem(stockItem).toPromise();
    expect(deleted).toBeTruthy();
  });

});
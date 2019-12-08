import '../../../__config__/sequelize';
import { rollback } from '../../../__utils__/db';
import { Transaction } from 'sequelize';
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

  test('createUser', async () => {
    await rollback(async (transaction: Transaction) => {
      const [result, created] = await StockItem.createStockItem(DEFAULT_STOCK_ITEM, transaction);

      expect(created).toBeTruthy();
    });
  });
});

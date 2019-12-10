import mockSequelizeStockItemProvider, {
  mockCreateStockItem,
  mockUpdateStockItem,
  mockDeleteStockItem,
  mockFindStockItemsBy,
  mockCountStockItems,
} from '../../../../__mocks__/stock-item/SequelizeStockItemProvider';
import StockItemRepository from '../../../../src/data/repositories/stock-item/StockItemRepository';
import StockItem from '@stocker/core/lib/domain/entities/stock-item/StockItem';
import { DEFAULT_STOCK_ITEM } from '../../../../__mocks__/stock-item/constant';
import { Options } from '@stocker/core/lib/interfaces/repository/options';

describe('StockItemRepository', () => {
  const repository: StockItemRepository = new StockItemRepository((new mockSequelizeStockItemProvider()) as any);

  beforeEach(() => {
    mockCreateStockItem.mockClear();
    mockUpdateStockItem.mockClear();
    mockDeleteStockItem.mockClear();
    mockFindStockItemsBy.mockClear();
    mockCountStockItems.mockClear();
  });

  test.skip('crawlStockItems', (done) => {
    repository.crawlStockItems()
      .subscribe((stockItems: StockItem[]) => {
        if (stockItems.length < 0) {
          throw 'Invalid stockItems';
        }
        done();
      });
  });

  test('createStockItem', (done) => {
    repository.createStockItem(DEFAULT_STOCK_ITEM)
      .subscribe(([stockItem, created]: [StockItem, boolean]) => {
        expect(mockCreateStockItem).toHaveBeenCalledTimes(1);
        expect(mockCreateStockItem).toBeCalledWith(DEFAULT_STOCK_ITEM);
        expect(created).toBeTruthy();
        expect(stockItem).toEqual(DEFAULT_STOCK_ITEM);
        done();
      });
  });

  test('updateStockItem', (done) => {
    repository.updateStockItem(DEFAULT_STOCK_ITEM)
      .subscribe(([stockItem, updated]: [StockItem, boolean]) => {
        expect(mockUpdateStockItem).toHaveBeenCalledTimes(1);
        expect(mockUpdateStockItem).toBeCalledWith(DEFAULT_STOCK_ITEM);
        expect(updated).toBeTruthy();
        expect(stockItem).toEqual(DEFAULT_STOCK_ITEM);
        done();
      });
  });

  test('deleteStockItem', (done) => {
    repository.deleteStockItem(DEFAULT_STOCK_ITEM)
      .subscribe(([stockItem, deleted]: [StockItem, boolean]) => {
        expect(mockDeleteStockItem).toHaveBeenCalledTimes(1);
        expect(mockDeleteStockItem).toBeCalledWith(DEFAULT_STOCK_ITEM);
        expect(deleted).toBeTruthy();
        expect(stockItem).toEqual(DEFAULT_STOCK_ITEM);
        done();
      });
  });

  test('findStockItemsBy', (done) => {
    const options: Options = {};
    repository.findStockItemsBy(options)
      .subscribe((stockItems: StockItem[]) => {
        expect(mockFindStockItemsBy).toHaveBeenCalledTimes(1);
        expect(mockFindStockItemsBy).toBeCalledWith(options);
        expect(stockItems.length).toBe(1);
        expect(stockItems[0]).toEqual(DEFAULT_STOCK_ITEM);
        done();
      });
  });

  test('countStockItems', (done) => {
    const options: Options = {};
    repository.countStockItems(options)
      .subscribe((count: number) => {
        expect(mockCountStockItems).toHaveBeenCalledTimes(1);
        expect(mockCountStockItems).toBeCalledWith(options);
        expect(count).toBe(1);
        done();
      });
  });
});

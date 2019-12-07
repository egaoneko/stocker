import { async } from 'rxjs/internal/scheduler/async';
import mockStockItemRepository, {
  mockDeleteStockItem,
  reset
} from '../../../../__mocks__/stock-item/StockItemRepository';
import { queue } from 'rxjs/internal/scheduler/queue';
import { apply } from '../../../../src/utils/common';
import DeleteStockItem from '../../../../src/domain/use-cases/stock-item/DeleteStockItem';
import {
  DEFAULT_CODE,
  DEFAULT_ID,
  DEFAULT_STOCK_ITEM
} from '../../../../__mocks__/stock-item/constant';
import StockItem from '../../../../src/domain/entities/stock-item/StockItem';
import { DEFAULT_NAME } from '../../../../__mocks__/account/constant';

describe('DeleteStockItem UseCase', () => {
  beforeEach(() => {
    mockStockItemRepository.mockClear();
    mockDeleteStockItem.mockClear();
    reset();
  });

  test('DeleteStockItem is called', (done) => {
    const repository = new mockStockItemRepository();
    const useCase: DeleteStockItem = new DeleteStockItem(repository);

    apply(useCase, (it: DeleteStockItem) => it.stockItem = DEFAULT_STOCK_ITEM)
      .runOnce(async, queue)
      .subscribe(([stockItem, success]: [StockItem, boolean]) => {
        expect(mockDeleteStockItem).toHaveBeenCalledTimes(1);
        expect(success).toBeTruthy();
        expect(stockItem).toBe(DEFAULT_STOCK_ITEM);
        done();
      });
  });

  test('DeleteStockItem is called with exist stockItem', (done) => {
    const repository = new mockStockItemRepository();
    const useCase: DeleteStockItem = new DeleteStockItem(repository);

    reset(true);
    apply(useCase, (it: DeleteStockItem) => it.stockItem = DEFAULT_STOCK_ITEM)
      .runOnce(async, queue)
      .subscribe(([stockItem, success]: [StockItem, boolean]) => {
        expect(mockDeleteStockItem).toHaveBeenCalledTimes(1);
        expect(success).toBeFalsy();
        expect(stockItem).toBe(DEFAULT_STOCK_ITEM);
        done();
      });
  });

  test('throw exception without stockItem', () => {
    const repository = new mockStockItemRepository();
    const useCase: DeleteStockItem = new DeleteStockItem(repository);

    expect(() => {
      apply(useCase, () => {
      })
        .runOnce(async, queue)
    }).toThrowError('Invalid params in UseCase');
  });

  test('throw exception with invalid id', () => {
    const repository = new mockStockItemRepository();
    const useCase: DeleteStockItem = new DeleteStockItem(repository);
    const stockItem: StockItem = new StockItem(DEFAULT_CODE, DEFAULT_NAME);

    expect(() => {
      apply(useCase, (it: DeleteStockItem) => it.stockItem = stockItem)
        .runOnce(async, queue)
    }).toThrowError('Invalid params in UseCase');
  });

  test('throw exception with invalid code', () => {
    const repository = new mockStockItemRepository();
    const useCase: DeleteStockItem = new DeleteStockItem(repository);
    const stockItem: StockItem = new StockItem('', DEFAULT_NAME);
    stockItem.id = DEFAULT_ID;

    expect(() => {
      apply(useCase, (it: DeleteStockItem) => it.stockItem = stockItem)
        .runOnce(async, queue)
    }).toThrowError('Invalid params in UseCase');
  });

  test('throw exception with invalid name', () => {
    const repository = new mockStockItemRepository();
    const useCase: DeleteStockItem = new DeleteStockItem(repository);
    const stockItem: StockItem = new StockItem(DEFAULT_CODE, '');
    stockItem.id = DEFAULT_ID;

    expect(() => {
      apply(useCase, (it: DeleteStockItem) => it.stockItem = stockItem)
        .runOnce(async, queue)
    }).toThrowError('Invalid params in UseCase');
  });

  test('throw exception with invalid state', () => {
    const repository = new mockStockItemRepository();
    const useCase: DeleteStockItem = new DeleteStockItem(repository);
    const stockItem: StockItem = new StockItem(DEFAULT_CODE, DEFAULT_NAME);
    stockItem.id = DEFAULT_ID;
    (stockItem as any).state = null;

    expect(() => {
      apply(useCase, (it: DeleteStockItem) => it.stockItem = stockItem)
        .runOnce(async, queue)
    }).toThrowError('Invalid params in UseCase');
  });
});
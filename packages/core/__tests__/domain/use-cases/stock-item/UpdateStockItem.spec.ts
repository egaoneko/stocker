import { async } from 'rxjs/internal/scheduler/async';
import mockStockItemRepository, {
  mockUpdateStockItem,
  reset
} from '../../../../__mocks__/stock-item/StockItemRepository';
import { queue } from 'rxjs/internal/scheduler/queue';
import { apply } from '../../../../src/utils/common';
import UpdateStockItem from '../../../../src/domain/use-cases/stock-item/UpdateStockItem';
import {
  DEFAULT_CODE,
  DEFAULT_ID,
  DEFAULT_STOCK_ITEM
} from '../../../../__mocks__/stock-item/constant';
import StockItem from '../../../../src/domain/entities/stock-item/StockItem';
import { DEFAULT_NAME } from '../../../../__mocks__/account/constant';

describe('UpdateStockItem UseCase', () => {
  beforeEach(() => {
    mockStockItemRepository.mockClear();
    mockUpdateStockItem.mockClear();
    reset();
  });

  test('UpdateStockItem is called', (done) => {
    const repository = new mockStockItemRepository();
    const useCase: UpdateStockItem = new UpdateStockItem(repository);

    apply(useCase, (it: UpdateStockItem) => it.stockItem = DEFAULT_STOCK_ITEM)
      .runOnce(async, queue)
      .subscribe(([stockItem, success]: [StockItem, boolean]) => {
        expect(mockUpdateStockItem).toHaveBeenCalledTimes(1);
        expect(success).toBeTruthy();
        expect(stockItem).toBe(DEFAULT_STOCK_ITEM);
        done();
      });
  });

  test('UpdateStockItem is called with exist stockItem', (done) => {
    const repository = new mockStockItemRepository();
    const useCase: UpdateStockItem = new UpdateStockItem(repository);

    reset(true);
    apply(useCase, (it: UpdateStockItem) => it.stockItem = DEFAULT_STOCK_ITEM)
      .runOnce(async, queue)
      .subscribe(([stockItem, success]: [StockItem, boolean]) => {
        expect(mockUpdateStockItem).toHaveBeenCalledTimes(1);
        expect(success).toBeFalsy();
        expect(stockItem).toBe(DEFAULT_STOCK_ITEM);
        done();
      });
  });

  test('throw exception without stockItem', () => {
    const repository = new mockStockItemRepository();
    const useCase: UpdateStockItem = new UpdateStockItem(repository);

    expect(() => {
      apply(useCase, () => {
      })
        .runOnce(async, queue)
    }).toThrowError('Invalid params in UseCase');
  });

  test('throw exception with invalid id', () => {
    const repository = new mockStockItemRepository();
    const useCase: UpdateStockItem = new UpdateStockItem(repository);
    const stockItem: StockItem = new StockItem(DEFAULT_CODE, DEFAULT_NAME);

    expect(() => {
      apply(useCase, (it: UpdateStockItem) => it.stockItem = stockItem)
        .runOnce(async, queue)
    }).toThrowError('Invalid params in UseCase');
  });

  test('throw exception with invalid code', () => {
    const repository = new mockStockItemRepository();
    const useCase: UpdateStockItem = new UpdateStockItem(repository);
    const stockItem: StockItem = new StockItem('', DEFAULT_NAME);
    stockItem.id = DEFAULT_ID;

    expect(() => {
      apply(useCase, (it: UpdateStockItem) => it.stockItem = stockItem)
        .runOnce(async, queue)
    }).toThrowError('Invalid params in UseCase');
  });

  test('throw exception with invalid name', () => {
    const repository = new mockStockItemRepository();
    const useCase: UpdateStockItem = new UpdateStockItem(repository);
    const stockItem: StockItem = new StockItem(DEFAULT_CODE, '');
    stockItem.id = DEFAULT_ID;

    expect(() => {
      apply(useCase, (it: UpdateStockItem) => it.stockItem = stockItem)
        .runOnce(async, queue)
    }).toThrowError('Invalid params in UseCase');
  });

  test('throw exception with invalid state', () => {
    const repository = new mockStockItemRepository();
    const useCase: UpdateStockItem = new UpdateStockItem(repository);
    const stockItem: StockItem = new StockItem(DEFAULT_CODE, DEFAULT_NAME);
    stockItem.id = DEFAULT_ID;
    (stockItem as any).state = null;

    expect(() => {
      apply(useCase, (it: UpdateStockItem) => it.stockItem = stockItem)
        .runOnce(async, queue)
    }).toThrowError('Invalid params in UseCase');
  });
});
import { async } from 'rxjs/internal/scheduler/async';
import mockStockItemRepository, {
  mockCreateStockItem,
  reset
} from '../../../../__mocks__/stock-item/StockItemRepository';
import { queue } from 'rxjs/internal/scheduler/queue';
import { apply } from '../../../../src/utils/common';
import CreateStockItem from '../../../../src/domain/use-cases/stock-item/CreateStockItem';
import {
  DEFAULT_CODE,
  DEFAULT_NAME,
  DEFAULT_STOCK_ITEM
} from '../../../../__mocks__/stock-item/constant';
import StockItem from '../../../../src/domain/entities/stock-item/StockItem';

describe('CreateStockItem UseCase', () => {
  beforeEach(() => {
    mockStockItemRepository.mockClear();
    mockCreateStockItem.mockClear();
    reset();
  });

  test('CreateStockItem is called', (done) => {
    const repository = new mockStockItemRepository();
    const useCase: CreateStockItem = new CreateStockItem(repository);

    reset(true);
    apply(useCase, (it: CreateStockItem) => it.stockItem = DEFAULT_STOCK_ITEM)
      .runOnce(async, queue)
      .subscribe(([stockItem, success]: [StockItem, boolean]) => {
        expect(mockCreateStockItem).toHaveBeenCalledTimes(1);
        expect(success).toBeTruthy();
        expect(stockItem).toBe(DEFAULT_STOCK_ITEM);
        done();
      });
  });

  test('CreateStockItem is called with exist stockItem', (done) => {
    const repository = new mockStockItemRepository();
    const useCase: CreateStockItem = new CreateStockItem(repository);

    apply(useCase, (it: CreateStockItem) => it.stockItem = DEFAULT_STOCK_ITEM)
      .runOnce(async, queue)
      .subscribe(([stockItem, success]: [StockItem, boolean]) => {
        expect(mockCreateStockItem).toHaveBeenCalledTimes(1);
        expect(success).toBeFalsy();
        expect(stockItem).toBe(DEFAULT_STOCK_ITEM);
        done();
      });
  });

  test('throw exception without stockItem', () => {
    const repository = new mockStockItemRepository();
    const useCase: CreateStockItem = new CreateStockItem(repository);

    expect(() => {
      apply(useCase, () => {
      })
        .runOnce(async, queue)
    }).toThrowError('Invalid params in UseCase');
  });

  test('throw exception with invalid code', () => {
    const repository = new mockStockItemRepository();
    const useCase: CreateStockItem = new CreateStockItem(repository);
    const stockItem: StockItem = new StockItem('', DEFAULT_NAME);

    expect(() => {
      apply(useCase, (it: CreateStockItem) => it.stockItem = stockItem)
        .runOnce(async, queue)
    }).toThrowError('Invalid params in UseCase');
  });

  test('throw exception with invalid name', () => {
    const repository = new mockStockItemRepository();
    const useCase: CreateStockItem = new CreateStockItem(repository);
    const stockItem: StockItem = new StockItem(DEFAULT_CODE, '');

    expect(() => {
      apply(useCase, (it: CreateStockItem) => it.stockItem = stockItem)
        .runOnce(async, queue)
    }).toThrowError('Invalid params in UseCase');
  });

  test('throw exception with invalid state', () => {
    const repository = new mockStockItemRepository();
    const useCase: CreateStockItem = new CreateStockItem(repository);
    const stockItem: StockItem = new StockItem(DEFAULT_CODE, DEFAULT_NAME);
    (stockItem as any).state = null;

    expect(() => {
      apply(useCase, (it: CreateStockItem) => it.stockItem = stockItem)
        .runOnce(async, queue)
    }).toThrowError('Invalid params in UseCase');
  });
});
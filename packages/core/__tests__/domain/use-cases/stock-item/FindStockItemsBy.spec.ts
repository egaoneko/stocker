import { async } from 'rxjs/internal/scheduler/async';
import mockStockItemRepository, {
  mockFindStockItemsBy,
  reset
} from '../../../../__mocks__/stock-item/StockItemRepository';
import { queue } from 'rxjs/internal/scheduler/queue';
import { apply } from '../../../../src/utils/common';
import FindStockItemsBy from '../../../../src/domain/use-cases/stock-item/FindStockItemsBy';
import StockItem from '../../../../src/domain/entities/stock-item/StockItem';
import {
  DEFAULT_FIND_OPTIONS,
  DEFAULT_STOCK_ITEM
} from '../../../../__mocks__/stock-item/constant';

describe('FindStockItemsBy UseCase', () => {
  beforeEach(() => {
    mockStockItemRepository.mockClear();
    mockFindStockItemsBy.mockClear();
    reset();
  });

  test('FindStockItemsBy is called', (done) => {
    const repository = new mockStockItemRepository();
    const useCase: FindStockItemsBy = new FindStockItemsBy(repository);

    apply(useCase, (it: FindStockItemsBy) => it.options = DEFAULT_FIND_OPTIONS)
      .runOnce(async, queue)
      .subscribe((stockItem: StockItem[] | null) => {
        if (!stockItem) {
          throw 'Can not find stock Item';
        }

        expect(mockFindStockItemsBy).toHaveBeenCalledTimes(1);
        expect(mockFindStockItemsBy).toBeCalledWith(DEFAULT_FIND_OPTIONS);
        expect(stockItem.length).toBe(1);
        done();
      });
  });
});

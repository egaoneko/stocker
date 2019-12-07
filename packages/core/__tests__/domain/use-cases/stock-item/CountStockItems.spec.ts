import { async } from 'rxjs/internal/scheduler/async';
import mockStockItemRepository, {
  mockCountStockItems,
  reset
} from '../../../../__mocks__/stock-item/StockItemRepository';
import { queue } from 'rxjs/internal/scheduler/queue';
import { apply } from '../../../../src/utils/common';
import {
  DEFAULT_FIND_OPTIONS,
} from '../../../../__mocks__/stock-item/constant';
import CountStockItems from '../../../../src/domain/use-cases/stock-item/CountStockItems';

describe('CountStockItems UseCase', () => {
  beforeEach(() => {
    mockStockItemRepository.mockClear();
    mockCountStockItems.mockClear();
    reset();
  });

  test('CountStockItems is called', (done) => {
    const repository = new mockStockItemRepository();
    const useCase: CountStockItems = new CountStockItems(repository);

    apply(useCase, (it: CountStockItems) => it.options = DEFAULT_FIND_OPTIONS)
      .runOnce(async, queue)
      .subscribe((count: number) => {
        expect(mockCountStockItems).toHaveBeenCalledTimes(1);
        expect(mockCountStockItems).toBeCalledWith(DEFAULT_FIND_OPTIONS);
        expect(count).toBe(1);
        done();
      });
  });
});

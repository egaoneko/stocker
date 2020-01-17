import mockHttpStockItemProvider, { mockFindStockItemsBy } from '../../../../__mocks__/stock-item/HttpStockItemProivider';
import StockItemRepository from '../../../../data/repositories/stock-item/StockItemRepository';
import StockItem from '@stocker/core/lib/domain/entities/stock-item/StockItem';
import { DEFAULT_FIND_OPTIONS } from '../../../../__mocks__/constant';
import { DEFAULT_STOCK_ITEM } from '../../../../__mocks__/stock-item/constant';

describe('StockItemRepository', () => {
  const repository: StockItemRepository = new StockItemRepository(
    (new mockHttpStockItemProvider()) as any,
  );

  beforeEach(() => {
    mockFindStockItemsBy.mockClear();
  });

  test('findStockItemsBy', async () => {
    const stockItems: StockItem[] = await repository.findStockItemsBy(DEFAULT_FIND_OPTIONS).toPromise();
    expect(mockFindStockItemsBy).toHaveBeenCalledTimes(1);
    expect(mockFindStockItemsBy).toBeCalledWith(DEFAULT_FIND_OPTIONS);
    expect(Array.isArray(stockItems)).toBeTruthy();
    expect(stockItems[0].equal(DEFAULT_STOCK_ITEM)).toBeTruthy();
  });
});

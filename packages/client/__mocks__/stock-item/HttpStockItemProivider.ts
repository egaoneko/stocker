import { of, Observable } from 'rxjs';
import StockItem, { StockItemInterface } from '@stocker/core/lib/domain/entities/stock-item/StockItem';
import { Options } from '@stocker/core/lib/interfaces/repository/options';
import { DEFAULT_STOCK_ITEM } from '@stocker/core/__mocks__/stock-item/constant';

export const mockFindStockItemsBy = jest.fn().mockImplementation((options: Options): Observable<StockItem[]> => {
  return of([DEFAULT_STOCK_ITEM]);
});

const mockHttpStockItemProvider = jest.fn().mockImplementation(() => {
  return {
    findStockItemsBy: mockFindStockItemsBy,
  };
});

export default mockHttpStockItemProvider;
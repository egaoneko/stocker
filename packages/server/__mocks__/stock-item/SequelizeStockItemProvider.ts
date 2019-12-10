import {
  Observable,
  of
} from 'rxjs';
import StockItem from '@stocker/core/lib/domain/entities/stock-item/StockItem';
import { Options } from '@stocker/core/lib/interfaces/repository/options';
import { DEFAULT_STOCK_ITEM } from './constant';

export const mockCreateStockItem = jest.fn().mockImplementation((stockItem: StockItem): Observable<[StockItem, boolean]> => {
  return of([stockItem, true]);
});

export const mockUpdateStockItem = jest.fn().mockImplementation((stockItem: StockItem): Observable<[StockItem, boolean]> => {
  return of([stockItem, true]);
});


export const mockDeleteStockItem = jest.fn().mockImplementation((stockItem: StockItem): Observable<[StockItem, boolean]> => {
  return of([stockItem, true]);
});


export const mockFindStockItemsBy = jest.fn().mockImplementation((options: Options): Observable<StockItem[]> => {
  return of([DEFAULT_STOCK_ITEM]);
});


export const mockCountStockItems = jest.fn().mockImplementation((options: Options): Observable<number> => {
  return of(1);
});

const mockSequelizeStockItemProvider = jest.fn().mockImplementation(() => {
  return {
    createStockItem: mockCreateStockItem,
    updateStockItem: mockUpdateStockItem,
    deleteStockItem: mockDeleteStockItem,
    findStockItemsBy: mockFindStockItemsBy,
    countStockItems: mockCountStockItems,
  };
});

export default mockSequelizeStockItemProvider;
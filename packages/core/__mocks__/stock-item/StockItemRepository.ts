import {
  Observable,
  of
} from 'rxjs';
import StockItem from '../../src/domain/entities/stock-item/StockItem';
import { DEFAULT_STOCK_ITEM } from './constant';

// --ADD_IMPORT--

export const mockCrawlStockItems = jest.fn().mockImplementation((): Observable<StockItem[]> => {
  return of([
    new StockItem('0000', 'Test1'),
    new StockItem('0000', 'Test2'),
  ]);
});

const cache: Map<string, StockItem> = new Map();
reset();

export function reset(empty: boolean = false): void {
  cache.clear();

  if (empty) {
    return;
  }
  const stockItem: StockItem = DEFAULT_STOCK_ITEM;
  cache.set(stockItem.id as string, stockItem);
}

export const mockCreateStockItem = jest.fn().mockImplementation((stockItem: StockItem): Observable<[StockItem, boolean]> => {
  if (cache.has(stockItem.id as string)) {
    return of([cache.get(stockItem.id as string) as StockItem, false]);
  } else {
    cache.set(stockItem.id as string, stockItem);
    return of([stockItem, true]);
  }
});

export const mockUpdateStockItem = jest.fn().mockImplementation((stockItem: StockItem): Observable<[StockItem, boolean]> => {
  if (cache.has(stockItem.id as string)) {
    cache.set(stockItem.id as string, stockItem);
    return of([cache.get(stockItem.id as string) as StockItem, true]);
  } else {
    return of([stockItem, false]);
  }
});

export const mockDeleteStockItem = jest.fn().mockImplementation((stockItem: StockItem): Observable<[StockItem, boolean]> => {
  if (cache.has(stockItem.id as string)) {
    cache.set(stockItem.id as string, stockItem);
    return of([cache.get(stockItem.id as string) as StockItem, true]);
  } else {
    return of([stockItem, false]);
  }
});

export const mockFindStockItemsBy = jest.fn().mockImplementation((): Observable<StockItem[]> => {
  return of(Array.from(cache.values()));
});

export const mockCountStockItems = jest.fn().mockImplementation((): Observable<number> => {
  return of(cache.size);
});

const mockStockItemRepository = jest.fn().mockImplementation(() => {
  return {
    crawlStockItems: mockCrawlStockItems,
    createStockItem: mockCreateStockItem,
    updateStockItem: mockUpdateStockItem,
    deleteStockItem: mockDeleteStockItem,
    findStockItemsBy: mockFindStockItemsBy,
    countStockItems: mockCountStockItems,
  };
});

export default mockStockItemRepository;
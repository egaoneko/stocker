import {
  forkJoin,
  Observable,
} from 'rxjs';
import { map } from 'rxjs/operators';
import StockItemRepository from '@stocker/core/lib/domain/repositories/stock-item/StockItemRepository';
import StockItem from '@stocker/core/lib/domain/entities/stock-item/StockItem';
import KrxStockItemProvider from '../../providers/stock-item/KrxStockItemProvider';
import WiseStockItemProvider from '../../providers/stock-item/WiseStockItemProvider';
import { Options } from '@stocker/core/lib/interfaces/repository/options';
import ApplicationErrorFactory from '@stocker/core/lib/data/errors/ApplicationErrorFactory';
import ErrorType from '@stocker/core/lib/error/ErrorType';

export default class CrawlStockItemRepository implements StockItemRepository {
  constructor(
    private krxStockItemProvider: KrxStockItemProvider,
    private wiseStockItemProvider: WiseStockItemProvider,
  ) {
  }

  public crawlStockItems(): Observable<StockItem[]> {
    return forkJoin<Observable<StockItem[]>[]>([
      this.krxStockItemProvider.crawlStockItems(),
      this.wiseStockItemProvider.crawlStockItems(),
    ])
      .pipe(
        map<StockItem[][], StockItem[]>(([krx, wise]: StockItem[][]): StockItem[] => {
          const stockItemMap: Map<string, StockItem> = new Map();

          krx.forEach((item: StockItem) => stockItemMap.set(item.code, item.clone()));
          wise.forEach((item: StockItem) => {
            let insertedItem: StockItem | undefined = stockItemMap.get(item.code);

            if (!insertedItem) {
              insertedItem = item.clone();
              stockItemMap.set(item.code, insertedItem);
              return;
            }

            insertedItem.wics = item.wics;
          });

          return Array.from(stockItemMap.values());
        })
      );
  }

  public createStockItem(stockItem: StockItem): Observable<[StockItem, boolean]> {
    throw ApplicationErrorFactory.getError(ErrorType.GENERAL, 'createStockItem is not supported.');
  }

  public updateStockItem(stockItem: StockItem): Observable<[StockItem, boolean]> {
    throw ApplicationErrorFactory.getError(ErrorType.GENERAL, 'updateStockItem is not supported.');
  }

  public deleteStockItem(stockItem: StockItem): Observable<[StockItem, boolean]> {
    throw ApplicationErrorFactory.getError(ErrorType.GENERAL, 'deleteStockItem is not supported.');
  }

  public findStockItemsBy(options: Options): Observable<StockItem[]> {
    throw ApplicationErrorFactory.getError(ErrorType.GENERAL, 'findStockItemsBy is not supported.');
  }

  public countStockItems(options: Options): Observable<number> {
    throw ApplicationErrorFactory.getError(ErrorType.GENERAL, 'countStockItems is not supported.');
  }
}
import {
  forkJoin,
  Observable,
} from 'rxjs';
import { map } from 'rxjs/operators';
import StockItemRepository from '@stocker/core/lib/domain/repositories/stock-item/StockItemRepository';
import StockItem from '@stocker/core/lib/domain/entities/stock-item/StockItem';
import KrxStockItemProvider from '../../http/providers/stock-item/KrxStockItemProvider';
import WiseStockItemProvider from '../../http/providers/stock-item/WiseStockItemProvider';

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
}
import {
  Observable,
  of
} from 'rxjs';
import StockItem from '@stocker/core/lib/domain/entities/stock-item/StockItem';
import { StockItemCrawlerType } from './constant';
import { async } from 'rxjs/internal/scheduler/async';
import { queue } from 'rxjs/internal/scheduler/queue';
import KrxStockItemContext from './contexts/KrxStockItemContext';
import { DEFAULT_AXIOS_INSTANCE } from '../constant';

export function crawlStockItems(type: StockItemCrawlerType): Observable<StockItem[]> {
  switch (type) {
    case StockItemCrawlerType.KRX:
      return crawlStockItemsFromKrx();
  }

  return of([]);
}

function crawlStockItemsFromKrx(): Observable<StockItem[]> {
  const KrxStockItemApplication: KrxStockItemContext = new KrxStockItemContext(DEFAULT_AXIOS_INSTANCE);
  return KrxStockItemApplication.useCases.crawlStockItems.run(async, queue);
}

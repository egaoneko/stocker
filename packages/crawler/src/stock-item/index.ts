import {
  Observable,
  of
} from 'rxjs';
import StockItem from '@stocker/core/lib/domain/entities/stock-item/StockItem';
import { async } from 'rxjs/internal/scheduler/async';
import { queue } from 'rxjs/internal/scheduler/queue';
import StockItemContext from './StockItemContext';
import { DEFAULT_AXIOS_INSTANCE } from '../constant';

export function crawlStockItems(): Observable<StockItem[]> {
  const StockItemApplication: StockItemContext = new StockItemContext(DEFAULT_AXIOS_INSTANCE);
  return StockItemApplication.useCases.crawlStockItems.run(async, queue);
}

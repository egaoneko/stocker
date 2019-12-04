import { Observable } from 'rxjs';
import LastBusinessDay from '@stocker/core/lib/domain/entities/stock/LastBusinessDay';
import { async } from 'rxjs/internal/scheduler/async';
import { queue } from 'rxjs/internal/scheduler/queue';
import { DEFAULT_AXIOS_INSTANCE } from '../constant';
import StockContext from './StockContext';

export function crawlLastBusinessDay(): Observable<LastBusinessDay> {
  const StockApplication: StockContext = new StockContext(DEFAULT_AXIOS_INSTANCE);
  return StockApplication.useCases.crawlLastBusinessDay
    .runOnce(async, queue);
}

import { Observable } from 'rxjs';
import LastBusinessDay from '@stocker/core/lib/domain/entities/stock/LastBusinessDay';
import { async } from 'rxjs/internal/scheduler/async';
import { queue } from 'rxjs/internal/scheduler/queue';
import { DEFAULT_AXIOS_INSTANCE } from '../constant';
import NaverStockContext from './contexts/NaverStockContext';

export function crawlLastBusinessDay(): Observable<LastBusinessDay> {
  const NaverStockApplication: NaverStockContext = new NaverStockContext(DEFAULT_AXIOS_INSTANCE);
  return NaverStockApplication.useCases.crawlLastBusinessDay
    .run(async, queue);
}

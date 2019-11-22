import {
  Observable
} from 'rxjs';
import StockRepository from '@stocker/core/lib/domain/repositories/stock/StockRepository';
import NaverStockProvider from '../http/providers/NaverStockProvider';
import LastBusinessDay from '@stocker/core/lib/domain/entities/stock/LastBusinessDay';

export default class NaverStockRepository implements StockRepository {
  constructor(
    private provider: NaverStockProvider,
  ) {
  }

  crawlLastBusinessDay(): Observable<LastBusinessDay> {
    return this.provider.crawlLastBusinessDay();
  }
}
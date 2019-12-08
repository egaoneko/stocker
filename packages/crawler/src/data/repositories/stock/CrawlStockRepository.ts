import {
  Observable
} from 'rxjs';
import StockRepository from '@stocker/core/lib/domain/repositories/stock/StockRepository';
import NaverStockProvider from '../../providers/stock/NaverStockProvider';
import LastBusinessDay from '@stocker/core/lib/domain/entities/stock/LastBusinessDay';

export default class CrawlStockRepository implements StockRepository {
  constructor(
    private provider: NaverStockProvider,
  ) {
  }

  public crawlLastBusinessDay(): Observable<LastBusinessDay> {
    return this.provider.crawlLastBusinessDay();
  }
}
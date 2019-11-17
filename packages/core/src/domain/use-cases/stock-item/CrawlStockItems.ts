import { Observable } from 'rxjs';
import UseCase from '../UseCase';
import StockItem from '../../entities/stock-item/StockItem';
import StockItemRepository from '../../repositories/stock-item/StockItemRepository';
import Market from '../../entities/market/Market';

export default class CrawlStockItems extends UseCase<StockItem[]> {
  public market: Market | null = null;

  constructor(
    private repository: StockItemRepository
  ) {
    super();
  }

  protected build(): Observable<StockItem[]> {
    return this.repository.crawlStockItems(this.market as Market);
  }

  protected validate(): boolean {
    return this.market !== null;
  }
}
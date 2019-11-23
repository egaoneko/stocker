import { Observable } from 'rxjs';
import UseCase from '../UseCase';
import StockItem from '../../entities/stock-item/StockItem';
import StockItemRepository from '../../repositories/stock-item/StockItemRepository';
import Market from '../../entities/market/Market';

export default class CrawlStockItems extends UseCase<StockItem[]> {
  constructor(
    private repository: StockItemRepository
  ) {
    super();
  }

  protected build(): Observable<StockItem[]> {
    return this.repository.crawlStockItems();
  }
}
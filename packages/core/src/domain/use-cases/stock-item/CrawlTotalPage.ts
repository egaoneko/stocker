import { Observable } from 'rxjs';
import UseCase from '../UseCase';
import StockItemRepository from '../../repositories/stock-item/StockItemRepository';
import Market from '../../entities/market/Market';

export default class CrawlTotalPage extends UseCase<number> {
  public market: Market | null = null;

  constructor(
    private repository: StockItemRepository
  ) {
    super();
  }

  protected build(): Observable<number> {
    return this.repository.crawlTotalPage(this.market as Market);
  }

  protected validate(): boolean {
    return this.market !== null;
  }
}
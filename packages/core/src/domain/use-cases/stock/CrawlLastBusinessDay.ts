import { Observable } from 'rxjs';
import UseCase from '../UseCase';
import StockRepository from '../../repositories/stock/StockRepository';
import LastBusinessDay from '../../entities/stock/LastBusinessDay';

export default class CrawlLastBusinessDay extends UseCase<LastBusinessDay> {
  constructor(
    private repository: StockRepository
  ) {
    super();
  }

  protected build(): Observable<LastBusinessDay> {
    return this.repository.crawlLastBusinessDay();
  }

  protected validate(): boolean {
    return true;
  }
}
import { Observable } from 'rxjs';
import UseCase from '../UseCase';
import FinancialStatementRepository from '../../repositories/financial-statement/FinancialStatementRepository';
import StockItem from '../../entities/stock-item/StockItem';
import FinancialStatement from '../../entities/financial-statement/FinancialStatement';

export default class CrawlFinancialStatement extends UseCase<FinancialStatement> {
  public stockItem: StockItem | null = null;

  constructor(
    private repository: FinancialStatementRepository
  ) {
    super();
  }

  protected build(): Observable<any> {
    return this.repository.crawlFinancialStatement(this.stockItem as StockItem);
  }

  protected validate(): boolean {
    if (!this.stockItem) {
      return false;
    }
    return true;
  }
}

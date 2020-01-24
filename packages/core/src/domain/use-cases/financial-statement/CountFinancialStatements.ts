import { Observable } from 'rxjs';
import UseCase from '../UseCase';
import FinancialStatementRepository from '../../repositories/financial-statement/FinancialStatementRepository';
import { Options } from '../../../interfaces/repository/options';

export default class CountFinancialStatements extends UseCase<number> {
  public options: Options = {};

  constructor(
    private repository: FinancialStatementRepository
  ) {
    super();
  }

  protected build(): Observable<number> {
    return this.repository.countFinancialStatements(this.options);
  }
}

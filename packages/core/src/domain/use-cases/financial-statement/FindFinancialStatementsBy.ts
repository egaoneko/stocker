import { Observable } from 'rxjs';
import UseCase from '../UseCase';
import FinancialStatement from '../../entities/financial-statement/FinancialStatement';
import FinancialStatementRepository from '../../repositories/financial-statement/FinancialStatementRepository';
import { Options } from '../../../interfaces/repository/options';

export default class FindFinancialStatementsBy extends UseCase<FinancialStatement[]> {
  public options: Options = {};

  constructor(
    private repository: FinancialStatementRepository
  ) {
    super();
  }

  protected build(): Observable<FinancialStatement[]> {
    return this.repository.findFinancialStatementsBy(this.options);
  }
}

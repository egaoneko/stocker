import { Observable } from 'rxjs';
import UseCase from '../UseCase';
import FinancialStatement from '../../entities/financial-statement/FinancialStatement';
import FinancialStatementRepository from '../../repositories/financial-statement/FinancialStatementRepository';

export default class CreateFinancialStatement extends UseCase<[FinancialStatement, boolean]> {
  public financialStatement: FinancialStatement | null = null;

  constructor(
    private repository: FinancialStatementRepository
  ) {
    super();
  }

  protected build(): Observable<[FinancialStatement, boolean]> {
    return this.repository.createFinancialStatement(this.financialStatement as FinancialStatement);
  }

  protected validate(): boolean {
    if (!this.financialStatement) {
      return false;
    }

    if (!this.financialStatement.stockItemId) {
      return false;
    }

    return true;
  }
}

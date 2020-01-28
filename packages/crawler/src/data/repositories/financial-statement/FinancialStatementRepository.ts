import {
  Observable,
  of
} from 'rxjs';
import FinancialStatementRepositoryInterface
  from '@stocker/core/lib/domain/repositories/financial-statement/FinancialStatementRepository';
import FinancialStatement from '@stocker/core/lib/domain/entities/financial-statement/FinancialStatement';
import { Options } from '@stocker/core/lib/interfaces/repository/options';
import ApplicationErrorFactory from '@stocker/core/lib/data/errors/ApplicationErrorFactory';
import ErrorType from '@stocker/core/lib/error/ErrorType';
import StockItem from '@stocker/core/lib/src/domain/entities/stock-item/StockItem';
// --ADD_IMPORT--

export default class FinancialStatementRepository implements FinancialStatementRepositoryInterface {
  public createFinancialStatement(financialStatement: FinancialStatement): Observable<[FinancialStatement, boolean]> {
    throw ApplicationErrorFactory.getError(ErrorType.GENERAL, 'method is not implemented.');
  }

  public findFinancialStatementsBy(options: Options): Observable<FinancialStatement[]> {
    throw ApplicationErrorFactory.getError(ErrorType.GENERAL, 'method is not implemented.');
  }

  public updateFinancialStatement(financialStatement: FinancialStatement): Observable<[FinancialStatement, boolean]> {
    throw ApplicationErrorFactory.getError(ErrorType.GENERAL, 'method is not implemented.');
  }

  public deleteFinancialStatement(financialStatement: FinancialStatement): Observable<[FinancialStatement, boolean]> {
    throw ApplicationErrorFactory.getError(ErrorType.GENERAL, 'method is not implemented.');
  }

  public countFinancialStatements(options: Options): Observable<number> {
    throw ApplicationErrorFactory.getError(ErrorType.GENERAL, 'method is not implemented.');
  }

  public crawlFinancialStatement(stockItem: StockItem): Observable<FinancialStatement> {
    throw ApplicationErrorFactory.getError(ErrorType.GENERAL, 'method is not implemented.');
  }

  // --ADD_METHOD--
}
import {
  Observable,
  of
} from 'rxjs';
import Repository from '../Repository';
import FinancialStatement from '../../entities/financial-statement/FinancialStatement';
import { Options } from '../../../interfaces/repository/options';
import StockItem from '../../entities/stock-item/StockItem';
// --ADD_IMPORT--

export default interface FinancialStatementRepository extends Repository {
  createFinancialStatement(financialStatement: FinancialStatement): Observable<[FinancialStatement, boolean]>;

  findFinancialStatementsBy(options: Options): Observable<FinancialStatement[]>;

  updateFinancialStatement(financialStatement: FinancialStatement): Observable<[FinancialStatement, boolean]>;

  deleteFinancialStatement(financialStatement: FinancialStatement): Observable<[FinancialStatement, boolean]>;

  countFinancialStatements(options: Options): Observable<number>;

  crawlFinancialStatement(stockItem: StockItem): Observable<FinancialStatement>;

  // --ADD_METHOD--
}
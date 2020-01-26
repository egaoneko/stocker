import {
  Observable,
  of
} from 'rxjs';
import FinancialStatement from '../../src/domain/entities/financial-statement/FinancialStatement';
import { Options } from '../../src/interfaces/repository/options';
import { DEFAULT_FINANCIAL_STATEMENT } from './constant';

// --ADD_IMPORT--

const cache: Map<string, FinancialStatement> = new Map();
reset();

export function reset(empty: boolean = false): void {
  cache.clear();

  if (empty) {
    return;
  }
  const financialStatement: FinancialStatement = DEFAULT_FINANCIAL_STATEMENT;
  cache.set(financialStatement.id as string, financialStatement);
}

export const mockCreateFinancialStatement = jest.fn().mockImplementation((financialStatement: FinancialStatement): Observable<[FinancialStatement, boolean]> => {
  if (cache.has(financialStatement.id as string)) {
    return of([cache.get(financialStatement.id as string) as FinancialStatement, false]);
  } else {
    cache.set(financialStatement.id as string, financialStatement);
    return of([financialStatement, true]);
  }
});
export const mockFindFinancialStatementsBy = jest.fn().mockImplementation((options: Options): Observable<FinancialStatement[]> => {
  return of(Array.from(cache.values()));
});
export const mockUpdateFinancialStatement = jest.fn().mockImplementation((financialStatement: FinancialStatement): Observable<[FinancialStatement, boolean]> => {
  if (cache.has(financialStatement.id as string)) {
    cache.set(financialStatement.id as string, financialStatement);
    return of([cache.get(financialStatement.id as string) as FinancialStatement, true]);
  } else {
    return of([financialStatement, false]);
  }
});
export const mockDeleteFinancialStatement = jest.fn().mockImplementation((financialStatement: FinancialStatement): Observable<[FinancialStatement, boolean]> => {
  if (cache.has(financialStatement.id as string)) {
    cache.set(financialStatement.id as string, financialStatement);
    return of([cache.get(financialStatement.id as string) as FinancialStatement, true]);
  } else {
    return of([financialStatement, false]);
  }
});
export const mockCountFinancialStatements = jest.fn().mockImplementation((options: Options): Observable<number> => {
  return of(cache.size);
});
// --ADD_METHOD--

const mockFinancialStatementRepository = jest.fn().mockImplementation(() => {
  return {
    createFinancialStatement: mockCreateFinancialStatement,
    findFinancialStatementsBy: mockFindFinancialStatementsBy,
    updateFinancialStatement: mockUpdateFinancialStatement,
    deleteFinancialStatement: mockDeleteFinancialStatement,
    countFinancialStatements: mockCountFinancialStatements,
    // --APPLY_METHOD--
  };
});

export default mockFinancialStatementRepository;
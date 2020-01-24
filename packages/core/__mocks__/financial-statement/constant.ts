import { DEFAULT_ID } from '../constant';
import FinancialStatement from '../../src/domain/entities/financial-statement/FinancialStatement';

export const DEFAULT_FINANCIAL_STATEMENT = new FinancialStatement(DEFAULT_ID);

DEFAULT_FINANCIAL_STATEMENT.id = DEFAULT_ID;
import { AxiosInstance } from 'axios';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import HttpProvider from '@stocker/core/lib/data/providers/HttpProvider';
import ApplicationErrorFactory from '@stocker/core/lib/data/errors/ApplicationErrorFactory';
import ErrorType from '@stocker/core/lib/error/ErrorType';
import FinancialStatement from '@stocker/core/lib/domain/entities/financial-statement/FinancialStatement';
import {
  DART_API_KEY,
  OPEN_DART_API
} from '../../../financial-statement/constant';

export default class DartFinancialStatementProvider extends HttpProvider {

  constructor(instance: AxiosInstance) {
    super(instance);
  }

  public crawlLastBusinessDay(): Observable<FinancialStatement> {
    return this.request<string>({
      method: 'GET',
      url: OPEN_DART_API,
      params: {
        crtfc_key: DART_API_KEY,
      }
    })
      .pipe(
        map((html: string): FinancialStatement => {
          throw ApplicationErrorFactory.getError(ErrorType.GENERAL, 'Not implements.')
        })
      );
  }
}
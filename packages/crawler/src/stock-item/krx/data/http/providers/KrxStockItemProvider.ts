import { AxiosInstance } from 'axios';
import {
  Observable,
} from 'rxjs';
import {
  map,
  switchMap
} from 'rxjs/operators';
import * as Papa from 'papaparse';
import HttpProvider from '@stocker/core/lib/data/http/providers/HttpProvider';
import CodeMarket from '../../../../data/entities/market/CodeMarket';
import StockItem from '@stocker/core/lib/domain/entities/stock-item/StockItem';
import {
  DOWNLOAD_URL,
  GENERATE_OTP_URL,
  KOSDAQ,
  KOSPI
} from '../../../constant';
import applicationErrorFactory from '@stocker/core/lib/data/errors/ApplicationErrorFactory';
import ErrorType from '@stocker/core/lib/error/ErrorType';
import KrxStockItemMapper from '../mappers/KrxStockItemMapper';

export default class KrxStockItemProvider extends HttpProvider {

  constructor(instance: AxiosInstance) {
    super(instance);
  }

  crawlStockItems(market: CodeMarket): Observable<StockItem[]> {
    return this.request<string>({
      method: 'GET',
      url: GENERATE_OTP_URL,
      params: {
        name: 'fileDown',
        filetype: 'csv',
        url: 'MKD/03/0303/03030103/mkd03030103',
        tp_cd: KrxStockItemProvider.getTpCdFromMarket(market),
        date: '20191115',
        lang: 'ko',
        pagePath: '/contents/MKD/13/1302/13020401/MKD13020401.jsp'
      }
    }).pipe(
      switchMap<string, Observable<string>>((code: string): Observable<string> => {
        if (!code) {
          throw applicationErrorFactory.getError(ErrorType.GENERAL, 'Can not generate OTP.');
        }

        return this.request<string>({
          method: 'POST',
          url: DOWNLOAD_URL,
          headers: {
            Referer: GENERATE_OTP_URL,
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          data: `code=${code}`,
        });
      }),
      map((data: string) => {
        if (!data) {
          throw applicationErrorFactory.getError(ErrorType.GENERAL, 'Can not download KRX market data index.');
        }

        const result: string[][] = Papa.parse(data, { header: false, }).data;

        if (result.length < 2) {
          throw applicationErrorFactory.getError(ErrorType.GENERAL, 'KRX market data index is something wrong.');
        }

        return result
          .slice(1)
          .map((row: string[]) => new KrxStockItemMapper().toEntity(row, market));
      })
    );
  }

  private static getTpCdFromMarket(market: CodeMarket): string {
    switch (market) {
      case KOSPI:
        return 'STK';
      case KOSDAQ:
        return 'KSQ';
    }
    throw applicationErrorFactory.getError(ErrorType.GENERAL, 'Unsupported market.');
  }
}
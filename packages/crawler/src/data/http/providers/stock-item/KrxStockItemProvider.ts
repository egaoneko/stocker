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
import CodeMarket from '../../../entities/market/CodeMarket';
import StockItem from '@stocker/core/lib/domain/entities/stock-item/StockItem';
import applicationErrorFactory from '@stocker/core/lib/data/errors/ApplicationErrorFactory';
import ErrorType from '@stocker/core/lib/error/ErrorType';
import KrxStockItemMapper from '../../mappers/stock-item/KrxStockItemMapper';
import {
  DOWNLOAD_URL,
  GENERATE_OTP_URL,
  KrxKOSDAQ,
  KrxKOSPI
} from '../../../../stock-item/constant';
import { crawlLastBusinessDay } from '../../../../index';
import LastBusinessDay from '@stocker/core/lib/domain/entities/stock/LastBusinessDay';
import * as moment from 'moment-timezone';

export default class KrxStockItemProvider extends HttpProvider {

  constructor(instance: AxiosInstance) {
    super(instance);
  }

  crawlStockItems(market: CodeMarket): Observable<StockItem[]> {
    return KrxStockItemProvider.getLastBusinessDay()
      .pipe(
        switchMap<LastBusinessDay, Observable<string>>((businessDay: LastBusinessDay): Observable<string> => {
          const date: string = moment.tz(businessDay.date, 'Asia/Seoul').format('YYYYMMDD');
          return this.request<string>({
            method: 'GET',
            url: GENERATE_OTP_URL,
            params: {
              name: 'fileDown',
              filetype: 'csv',
              url: 'MKD/03/0303/03030103/mkd03030103',
              tp_cd: KrxStockItemProvider.getTpCdFromMarket(market),
              date: date,
              lang: 'ko',
              pagePath: '/contents/MKD/13/1302/13020401/MKD13020401.jsp'
            }
          });
        }),
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
      case KrxKOSPI:
        return 'STK';
      case KrxKOSDAQ:
        return 'KSQ';
    }
    throw applicationErrorFactory.getError(ErrorType.GENERAL, 'Unsupported market.');
  }

  private static getLastBusinessDay(): Observable<LastBusinessDay> {
    return crawlLastBusinessDay();
  }
}
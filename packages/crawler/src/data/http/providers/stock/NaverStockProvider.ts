import { AxiosInstance } from 'axios';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import HttpProvider from '@stocker/core/lib/data/http/providers/HttpProvider';
import * as cheerio from 'cheerio';
import LastBusinessDay from '@stocker/core/lib/domain/entities/stock/LastBusinessDay';
import applicationErrorFactory from '@stocker/core/lib/data/errors/ApplicationErrorFactory';
import ErrorType from '@stocker/core/lib/error/ErrorType';
import * as moment from 'moment-timezone';
import { SISE_DEPOSIT_URL } from '../../../../stock/constant';

export default class NaverStockProvider extends HttpProvider {

  constructor(instance: AxiosInstance) {
    super(instance);
  }

  public crawlLastBusinessDay(): Observable<LastBusinessDay> {
    return this.request<string>({
      method: 'GET',
      url: SISE_DEPOSIT_URL,
    })
      .pipe(
        map((html: string): LastBusinessDay => {
          const $: CheerioStatic = cheerio.load(html);
          const date: RegExpMatchArray | null = $('div#type_0 ul.subtop_chart_note span.tah')
            .text()
            .match(/[0-9]+.[0-9]+.[0-9]+/);

          if (!date) {
            throw applicationErrorFactory.getError(ErrorType.GENERAL, 'Can not find the date.');
          }

          return new LastBusinessDay(moment.tz(date[0], 'YYYY.MM.DD', 'Asia/Seoul').toDate());
        })
      );
  }
}
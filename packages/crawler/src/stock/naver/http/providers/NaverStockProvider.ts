import { AxiosInstance } from 'axios';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import HttpProvider from '@stocker/core/lib/data/http/providers/HttpProvider';
import * as cheerio from 'cheerio';
import LastBusinessDay from '@stocker/core/lib/domain/entities/stock/LastBusinessDay';
import NaverLastBusinessDayMapper from '../mappers/NaverLastBusinessDayMapper';
import { SISE_DEPOSIT_URL } from '../../constant';

export default class NaverStockProvider extends HttpProvider {

  constructor(instance: AxiosInstance) {
    super(instance);
  }

  crawlLastBusinessDay(): Observable<LastBusinessDay> {
    return this.request<string>({
      method: 'GET',
      url: SISE_DEPOSIT_URL,
    })
      .pipe(
        map((html: string): LastBusinessDay => {
          const $: CheerioStatic = cheerio.load(html);
          // const lastBusinessDay: LastBusinessDay | null = new NaverLastBusinessDayMapper().toEntity($, element);
          const lastBusinessDay: LastBusinessDay | null = null;

          if (!lastBusinessDay) {
            throw 'Error'
          }

          return lastBusinessDay;
        })
      );
  }
}
import { AxiosInstance } from 'axios';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import StockItem from '@stocker/core/lib/domain/entities/stock-item/StockItem';
import HttpProvider from '@stocker/core/lib/data/http/providers/HttpProvider';
import * as cheerio from 'cheerio';
import NaverStockItemMapper from '../mappers/NaverStockItemMapper';
import { KOSPI } from '../../../constant';
import CodeMarket from '../../../../data/entities/market/CodeMarket';
import { convertEucKrToUtf8 } from '../../../../utils';

export default class NaverStockItemProvider extends HttpProvider {

  constructor(instance: AxiosInstance) {
    super(instance);
  }

  crawlTotalPage(market: CodeMarket): Observable<number> {
    return this.request<string>({
      params: {
        sosok: market.code,
        page: 1,
      }
    })
      .pipe(
        map((html: string): number => {
          const $: CheerioStatic = cheerio.load(html);
          const href: string | undefined = $('td.pgRR').find('a').attr('href');

          if (!href) {
            return 0;
          }

          const matches: RegExpMatchArray | null = href.match(/page=(\d+)/);

          if (!matches || matches.length < 2) {
            return 0;
          }

          const total: number = parseInt(matches[1], 10);

          if (Number.isNaN(total)) {
            return 0;
          }

          return total;
        })
      );
  }

  crawlStockItemsByPage(market: CodeMarket, page: number): Observable<StockItem[]> {
    return this.request<Buffer>({
      params: {
        sosok: market.code,
        page: page,
      },
      responseType: 'arraybuffer'
    })
      .pipe(
        map(convertEucKrToUtf8),
        map((html: string): StockItem[] => {
          const $: CheerioStatic = cheerio.load(html);
          const $bodyList: Cheerio = $('div.box_type_l table tbody').children('tr[onmouseover]');
          let items: StockItem[] = [];
          $bodyList.each((i, element): any => {
            const stockItem: StockItem | null = new NaverStockItemMapper().toEntity($, element, KOSPI);

            if (!stockItem) {
              return;
            }
            items.push(stockItem);
          });
          items = items.filter((item: StockItem): boolean => !!item);
          return items;
        })
      );
  }
}
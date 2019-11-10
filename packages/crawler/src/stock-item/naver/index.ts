import axios, { AxiosInstance } from 'axios';
import {
  forkJoin,
  Observable,
} from 'rxjs';
import { async } from 'rxjs/internal/scheduler/async';
import { queue } from 'rxjs/internal/scheduler/queue';
import {
  switchMap,
  map,
} from 'rxjs/operators';
import {
  MARKET_CAPITALIZATION_URL,
  TIMEOUT
} from './constant';
import Context from './Context';
import { apply } from '@stocker/core/lib/utils/common';
import CrawlTotalPage from '@stocker/core/lib/domain/use-cases/stock-item/CrawlTotalPage';
import StockItem from '@stocker/core/lib/domain/entities/stock-item/StockItem';
import CrawlStockItems from '@stocker/core/lib/domain/use-cases/stock-item/CrawlStockItems';
import CodeMarket from '../data/entities/market/CodeMarket';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: MARKET_CAPITALIZATION_URL,
  timeout: TIMEOUT,
});

const Application: Context = new Context(axiosInstance);

export default function crawlStockItemsFromNaver(market: CodeMarket): Observable<StockItem[]> {
  return apply<CrawlTotalPage>(
    Application.useCases.crawlTotalPage,
    (it: CrawlTotalPage) => it.market = market
  )
    .run(async, queue)
    .pipe(
      switchMap<number, Observable<StockItem[]>>((total: number): Observable<StockItem[]> => {
        const obsList: Observable<StockItem[]>[] = [];
        for (let idx: number = 1; idx <= total; idx++) {
          obsList.push(
            apply<CrawlStockItems>(
              Application.useCases.crawlStockItems,
              (it: CrawlStockItems) => {
                it.market = market;
                it.page = idx;
              }
            )
              .run(async, queue)
          )
        }
        return forkJoin<Observable<StockItem[]>[]>(obsList)
          .pipe(
            map<StockItem[][], StockItem[]>((list: StockItem[][]): StockItem[] =>
              list.reduce((acc: StockItem[], value: StockItem[]) => acc.concat(value), [])
            )
          );
      })
    );
}

import {
  forkJoin,
  Observable
} from 'rxjs';
import StockItemRepository from '@stocker/core/lib/domain/repositories/stock-item/StockItemRepository';
import StockItem from '@stocker/core/lib/domain/entities/stock-item/StockItem';
import NaverStockItemProvider from '../../http/providers/NaverStockItemProvider';
import CodeMarket from '../../../../../data/entities/market/CodeMarket';
import {
  map,
  switchMap
} from 'rxjs/operators';

export default class NaverStockItemRepository implements StockItemRepository {
  constructor(
    private provider: NaverStockItemProvider,
  ) {
  }

  crawlStockItems(market: CodeMarket): Observable<StockItem[]> {
    return this.crawlTotalPage(market)
      .pipe(
        switchMap<number, Observable<StockItem[]>>((total: number): Observable<StockItem[]> => {
          const obsList: Observable<StockItem[]>[] = [];
          for (let page: number = 1; page <= total; page++) {
            obsList.push(
              this.crawlStockItemsByPage(market, page),
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

  private crawlTotalPage(market: CodeMarket): Observable<number> {
    return this.provider.crawlTotalPage(market);
  }

  private crawlStockItemsByPage(market: CodeMarket, page: number): Observable<StockItem[]> {
    return this.provider.crawlStockItemsByPage(market, page);
  }
}
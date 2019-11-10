import { Observable } from 'rxjs';
import StockItemRepository from '@stocker/core/lib/domain/repositories/stock-item/StockItemRepository';
import StockItem from '@stocker/core/lib/domain/entities/stock-item/StockItem';
import NaverApiProvider from '../../http/provider/NaverApiProvider';
import CodeMarket from '../../../../data/entities/market/CodeMarket';

export default class NaverStockItemRepository implements StockItemRepository {
  constructor(
    private naverApi: NaverApiProvider,
  ) {
  }

  crawlStockItems(market: CodeMarket, page: number): Observable<StockItem[]> {
    return this.naverApi.crawlStockItems(market, page);
  }

  crawlTotalPage(market: CodeMarket): Observable<number> {
    return this.naverApi.crawlTotalPage(market);
  }

}
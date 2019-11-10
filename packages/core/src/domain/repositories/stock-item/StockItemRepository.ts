import { Observable } from 'rxjs';
import Repository from '../Repository';
import StockItem from '../../entities/stock-item/StockItem';
import Market from '../../entities/market/Market';

export default interface StockItemRepository extends Repository {
  crawlTotalPage(market: Market): Observable<number>
  crawlStockItems(market: Market, page: number): Observable<StockItem[]>
}
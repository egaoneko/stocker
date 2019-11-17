import { Observable } from 'rxjs';
import Repository from '../Repository';
import StockItem from '../../entities/stock-item/StockItem';
import Market from '../../entities/market/Market';

export default interface StockItemRepository extends Repository {
  crawlStockItems(market: Market): Observable<StockItem[]>
}
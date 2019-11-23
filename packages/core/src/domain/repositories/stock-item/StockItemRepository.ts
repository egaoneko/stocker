import { Observable } from 'rxjs';
import Repository from '../Repository';
import StockItem from '../../entities/stock-item/StockItem';

export default interface StockItemRepository extends Repository {
  crawlStockItems(): Observable<StockItem[]>
}
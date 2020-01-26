import { Observable } from 'rxjs';
import Repository from '../Repository';
import StockItem from '../../entities/stock-item/StockItem';
import { Options } from '../../../interfaces/repository/options';
// --ADD_IMPORT--

export default interface StockItemRepository extends Repository {
  crawlStockItems(): Observable<StockItem[]>;

  createStockItem(stockItem: StockItem): Observable<[StockItem, boolean]>;

  updateStockItem(stockItem: StockItem): Observable<[StockItem, boolean]>;

  deleteStockItem(stockItem: StockItem): Observable<[StockItem, boolean]>;

  findStockItemsBy(options: Options): Observable<StockItem[]>;

  countStockItems(options: Options): Observable<number>;

  // --ADD_METHOD--
}
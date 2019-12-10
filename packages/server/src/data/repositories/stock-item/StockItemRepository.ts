import StockItemRepositoryInterface from '@stocker/core/lib/domain/repositories/stock-item/StockItemRepository';
import { Observable } from 'rxjs';
import StockItem from '@stocker/core/lib/domain/entities/stock-item/StockItem';
import { Options } from '@stocker/core/lib/interfaces/repository/options';
import { crawlStockItems } from '@stocker/crawler';
import SequelizeStockItemProvider from '../../providers/stock-item/SequelizeStockItemProvider';

export default class StockItemRepository implements StockItemRepositoryInterface {
  constructor(
    private provider: SequelizeStockItemProvider,
  ) {
  }

  public crawlStockItems(): Observable<StockItem[]> {
    return crawlStockItems();
  }

  public createStockItem(stockItem: StockItem): Observable<[StockItem, boolean]> {
    return this.provider.createStockItem(stockItem);
  }

  public updateStockItem(stockItem: StockItem): Observable<[StockItem, boolean]> {
    return this.provider.updateStockItem(stockItem);
  }

  public deleteStockItem(stockItem: StockItem): Observable<[StockItem, boolean]> {
    return this.provider.deleteStockItem(stockItem);
  }

  public findStockItemsBy(options: Options): Observable<StockItem[]> {
    return this.provider.findStockItemsBy(options);
  }

  public countStockItems(options: Options): Observable<number> {
    return this.provider.countStockItems(options);
  }
}
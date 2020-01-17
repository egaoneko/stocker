import {
  Observable,
  of
} from 'rxjs';
import StockItemRepositoryInterface from '@stocker/core/lib/domain/repositories/stock-item/StockItemRepository';
import StockItem from '@stocker/core/lib/domain/entities/stock-item/StockItem';
import HttpStockItemProvider from '../../providers/stock-item/HttpStockItemProvider';
import { Options } from '@stocker/core/lib/interfaces/repository/options';
import ApplicationErrorFactory from '@stocker/core/lib/data/errors/ApplicationErrorFactory';
import ErrorType from '@stocker/core/lib/error/ErrorType';

export default class StockItemRepository implements StockItemRepositoryInterface {
  constructor(
    private provider: HttpStockItemProvider,
  ) {
  }

  public crawlStockItems(): Observable<StockItem[]> {
    throw ApplicationErrorFactory.getError(ErrorType.GENERAL, 'Not implements');
  }

  public createStockItem(stockItem: StockItem): Observable<[StockItem, boolean]> {
    throw ApplicationErrorFactory.getError(ErrorType.GENERAL, 'Not implements');
  }

  public updateStockItem(stockItem: StockItem): Observable<[StockItem, boolean]> {
    throw ApplicationErrorFactory.getError(ErrorType.GENERAL, 'Not implements');
  }

  public deleteStockItem(stockItem: StockItem): Observable<[StockItem, boolean]> {
    throw ApplicationErrorFactory.getError(ErrorType.GENERAL, 'Not implements');
  }

  public findStockItemsBy(options: Options): Observable<StockItem[]> {
    return this.provider.findStockItemsBy(options);
  }

  public countStockItems(options: Options): Observable<number> {
    throw ApplicationErrorFactory.getError(ErrorType.GENERAL, 'Not implements');
  }
}
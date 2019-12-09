import { Observable } from 'rxjs';
import { fromPromise } from 'rxjs/internal-compatibility';
import { Transaction } from 'sequelize';
import StockItem from '../../models/stock-item/StockItem';
import StockItemEntity from '@stocker/core/lib/domain/entities/stock-item/StockItem';
import { Options } from '@stocker/core/lib/interfaces/repository/options';
import ApplicationErrorFactory from '@stocker/core/lib/data/errors/ApplicationErrorFactory';
import ErrorType from '@stocker/core/lib/error/ErrorType';

export default class SequelizeStockItemProvider {
  public createStockItem(stockItem: StockItemEntity, transaction?: Transaction): Observable<[StockItemEntity, boolean]> {
    return fromPromise(
      StockItem.createStockItem(stockItem, transaction)
        .then(
          ([stockItem, created]: [StockItem, boolean]): [StockItemEntity, boolean] => [stockItem.toEntity(), created]
        )
    );
  }

  public updateStockItem(stockItem: StockItemEntity, transaction?: Transaction): Observable<[StockItemEntity, boolean]> {
    return fromPromise(
      StockItem.updateStockItem(stockItem, transaction)
        .then(
          ([rows]: [number, StockItem[]]): [StockItemEntity, boolean] => {
            if (rows === 0) {
              return [stockItem, false];
            }

            if (rows > 1) {
              throw ApplicationErrorFactory.getError(ErrorType.GENERAL, `Too many updated.`);
            }

            return [stockItem, true];
          }
        )
    );
  }

  public deleteStockItem(stockItem: StockItemEntity, transaction?: Transaction): Observable<[StockItemEntity, boolean]> {
    return fromPromise(
      StockItem.deleteStockItem(stockItem, transaction)
        .then(
          (rows: number): [StockItemEntity, boolean] => {
            if (rows === 0) {
              return [stockItem, false];
            }

            if (rows > 1) {
              throw ApplicationErrorFactory.getError(ErrorType.GENERAL, `Too many deleted.`);
            }

            return [stockItem, true];
          }
        )
    )
  }

  public findStockItemsBy(options: Options): Observable<StockItemEntity[] | null> {
    return fromPromise(
      StockItem.findStockItemsBy(options)
        .then((stockItems: StockItem[] | null): StockItemEntity[] | null => {
          if (!stockItems) {
            return stockItems;
          }

          return stockItems.map((stockItem: StockItem): StockItemEntity => stockItem.toEntity());
        })
    );
  }

  public countStockItems(options: Options): Observable<number> {
    return fromPromise(StockItem.countStockItems(options));
  }
}
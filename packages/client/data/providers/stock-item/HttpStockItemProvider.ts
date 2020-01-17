import { AxiosInstance } from 'axios';
import {
  Observable,
} from 'rxjs';
import StockItem, { StockItemInterface } from '@stocker/core/lib/domain/entities/stock-item/StockItem';
import HttpProvider from '@stocker/core/lib/data/providers/HttpProvider';
import { API_SEVER } from '../../../constant/common';
import { Options } from '@stocker/core/lib/interfaces/repository/options';
import { map } from 'rxjs/operators';
import StockItemJSONMapper from '@stocker/core/lib/data/mappers/stock-item/StockItemJSONMapper';
import { getToken } from '../../../utils/auth';

const mapper: StockItemJSONMapper = new StockItemJSONMapper();

export default class HttpStockItemProvider extends HttpProvider {

  constructor(instance: AxiosInstance) {
    super(instance);
  }

  public findStockItemsBy(options: Options): Observable<StockItem[]> {
    return this.request<StockItemInterface[]>({
      method: 'GET',
      url: API_SEVER + '/stock-items',
      data: options,
      headers: {
        Authorization: getToken(),
      }
    })
      .pipe(
        map((stockItems: StockItemInterface[]): StockItem[] => {
          return stockItems.map(
            (stockItem: StockItemInterface): StockItem => mapper.toEntity(stockItem)
          );
        })
      );
  }
}

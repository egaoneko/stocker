import { AxiosInstance } from 'axios';
import {
  Observable,
  of
} from 'rxjs';
import { map } from 'rxjs/operators';
import StockItem from '@stocker/core/lib/domain/entities/stock-item/StockItem';
import HttpProvider from '@stocker/core/lib/data/providers/HttpProvider';
import { API_SEVER } from '../../../constant/common';
import { Options } from '@stocker/core/lib/interfaces/repository/options';

export default class HttpStockItemProvider extends HttpProvider {

  constructor(instance: AxiosInstance) {
    super(instance);
  }

  public findStockItemsBy(options: Options): Observable<StockItem[]> {
    return of([]);
  }
}

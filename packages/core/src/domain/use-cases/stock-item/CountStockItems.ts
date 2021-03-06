import { Observable } from 'rxjs';
import UseCase from '../UseCase';
import StockItemRepository from '../../repositories/stock-item/StockItemRepository';
import { Options } from '../../../interfaces/repository/options';

export default class CountStockItems extends UseCase<number> {
  public options: Options = {};

  constructor(
    private repository: StockItemRepository
  ) {
    super();
  }

  protected build(): Observable<number> {
    return this.repository.countStockItems(this.options);
  }
}
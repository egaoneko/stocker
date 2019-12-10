import { Observable } from 'rxjs';
import UseCase from '../UseCase';
import StockItem from '../../entities/stock-item/StockItem';
import StockItemRepository from '../../repositories/stock-item/StockItemRepository';
import { Options } from '../../../interfaces/repository/options';

export default class FindStockItemsBy extends UseCase<StockItem[]> {
  public options: Options = {};

  constructor(
    private repository: StockItemRepository
  ) {
    super();
  }

  protected build(): Observable<StockItem[]> {
    return this.repository.findStockItemsBy(this.options);
  }
}
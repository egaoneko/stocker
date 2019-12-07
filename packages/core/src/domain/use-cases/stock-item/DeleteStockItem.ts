import { Observable } from 'rxjs';
import UseCase from '../UseCase';
import StockItem from '../../entities/stock-item/StockItem';
import StockItemRepository from '../../repositories/stock-item/StockItemRepository';

export default class DeleteStockItem extends UseCase<[StockItem, boolean]> {
  public stockItem: StockItem | null = null;

  constructor(
    private repository: StockItemRepository
  ) {
    super();
  }

  protected build(): Observable<[StockItem, boolean]> {
    return this.repository.deleteStockItem(this.stockItem as StockItem);
  }

  protected validate(): boolean {
    if (!this.stockItem) {
      return false;
    }

    if (!this.stockItem.id) {
      return false;
    }

    if (!this.stockItem.code) {
      return false;
    }

    if (!this.stockItem.name) {
      return false;
    }

    if (!this.stockItem.state) {
      return false;
    }

    return true;
  }
}
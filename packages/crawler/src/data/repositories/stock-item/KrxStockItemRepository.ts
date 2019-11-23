import {
  Observable,
} from 'rxjs';
import StockItemRepository from '@stocker/core/lib/domain/repositories/stock-item/StockItemRepository';
import StockItem from '@stocker/core/lib/domain/entities/stock-item/StockItem';
import KrxStockItemProvider from '../../http/providers/stock-item/KrxStockItemProvider';
import CodeMarket from '../../entities/market/CodeMarket';

export default class KrxStockItemRepository implements StockItemRepository {
  constructor(
    private provider: KrxStockItemProvider,
  ) {
  }

  crawlStockItems(): Observable<StockItem[]> {
    return this.provider.crawlStockItems();
  }
}
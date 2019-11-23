import CSVMapper from '../CSVMapper';
import StockItem from '@stocker/core/lib/domain/entities/stock-item/StockItem';
import Market from '@stocker/core/lib/domain/entities/market/Market';

export default class KrxStockItemMapper implements CSVMapper<StockItem> {
    toEntity(row: string[], market: Market): StockItem {
      return new StockItem(
        row[1],
        row[2],
        market,
      );
    }
}
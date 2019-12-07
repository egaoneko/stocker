import CSVMapper from '../CSVMapper';
import StockItem from '@stocker/core/lib/domain/entities/stock-item/StockItem';
import Market from '@stocker/core/lib/domain/entities/market/Market';
import {
  KOSDAQ,
  KOSPI
} from '@stocker/core/lib/constants/market';
import ErrorType from '@stocker/core/lib/error/ErrorType';
import ApplicationErrorFactory from '@stocker/core/lib/data/errors/ApplicationErrorFactory';

export default class KrxStockItemMapper implements CSVMapper<StockItem> {
  public toEntity(row: string[]): StockItem {
    const stockItem: StockItem = new StockItem(
      row[1].trim(),
      row[2].trim(),
    );

    stockItem.market = KrxStockItemMapper.getMarket(row[0]);
    stockItem.gics = row[3].trim();
    return stockItem;
  }

  private static getMarket(code: string): Market {
    switch (code) {
      case '코스피':
        return KOSPI;
      case '코스닥': {
        return KOSDAQ;
      }
    }
    throw ApplicationErrorFactory.getError(ErrorType.GENERAL, 'Unsupported market.');
  }
}
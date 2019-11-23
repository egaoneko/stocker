import CSVMapper from '../CSVMapper';
import StockItem from '@stocker/core/lib/domain/entities/stock-item/StockItem';
import Market from '@stocker/core/lib/domain/entities/market/Market';
import {
  KOSDAQ,
  KOSPI
} from '@stocker/core/lib/constant/market';
import ErrorType from '@stocker/core/lib/error/ErrorType';
import applicationErrorFactory from '@stocker/core/lib/data/errors/ApplicationErrorFactory';

export default class KrxStockItemMapper implements CSVMapper<StockItem> {
  toEntity(row: string[]): StockItem {
    const stockItem: StockItem = new StockItem(
      KrxStockItemMapper.getMarket(row[0]),
      row[1],
      row[2],
    );

    stockItem.gics = row[3];
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
    throw applicationErrorFactory.getError(ErrorType.GENERAL, 'Unsupported market.');
  }
}
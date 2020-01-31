import ValueMapper from '@stocker/core/lib/data/mappers/ValueMapper';
import StockItem from '@stocker/core/lib/domain/entities/stock-item/StockItem';
import { CorpCodeXML } from '../../providers/stock-item/DartStockItemProvider';

export default class DartStockItemMapper implements ValueMapper<CorpCodeXML, StockItem> {
  public toEntity(xml: CorpCodeXML): StockItem {
    const stockItem: StockItem = new StockItem(
      xml.stock_code._text,
      xml.corp_name._text,
    );

    stockItem.corpCode = xml.corp_code._text;
    return stockItem;
  }
}
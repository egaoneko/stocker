import JSONMapper from '../JSONMapper';
import StockItem, { StockItemInterface } from '../../../domain/entities/stock-item/StockItem';
import MarketJSONMapper from '../market/MarketJSONMapper';
import ApplicationErrorFactory from '../../errors/ApplicationErrorFactory';
import ErrorType from '../../../error/ErrorType';
import { StockItemState } from '../../../enums/stock-item';

const marketJSONMapper: MarketJSONMapper = new MarketJSONMapper();

export default class StockItemJSONMapper implements JSONMapper<StockItemInterface, StockItem> {
  public toEntity(json: StockItemInterface): StockItem {
    if (
      !json.code ||
      !json.name
    ) {
      throw ApplicationErrorFactory.getError(ErrorType.GENERAL, 'Invalid json');
    }
    const stockItem: StockItem = new StockItem(json.code, json.name);
    stockItem.id = json.id;
    stockItem.market = json.market && marketJSONMapper.toEntity(json.market);
    stockItem.gics = json.gics;
    stockItem.wics = json.wics;
    stockItem.state = json.state as StockItemState;
    return stockItem;
  }

  public toJSON(entity: StockItem): StockItemInterface {
    return {
      id: entity.id,
      code: entity.code,
      name: entity.name,
      market: entity.market && marketJSONMapper.toJSON(entity.market),
      gics: entity.gics,
      wics: entity.wics,
      state: entity.state,
    };
  }
}
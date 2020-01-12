import JSONMapper from '../JSONMapper';
import Market, { MarketInterface } from '../../../domain/entities/market/Market';
import NationJSONMapper from '../nation/NationJSONMapper';
import ApplicationErrorFactory from '../../errors/ApplicationErrorFactory';
import ErrorType from '../../../error/ErrorType';

const nationJSONMapper: NationJSONMapper = new NationJSONMapper();

export default class MarketJSONMapper implements JSONMapper<MarketInterface, Market> {
  public toEntity(json: MarketInterface): Market {
    if (
      !json.name ||
      !json.nation
    ) {
      throw ApplicationErrorFactory.getError(ErrorType.GENERAL, 'Invalid json');
    }
    return new Market(json.name, nationJSONMapper.toEntity(json.nation));
  }

  public toJSON(entity: Market): MarketInterface {
    return {
      name: entity.name,
      nation: nationJSONMapper.toJSON(entity.nation),
    };
  }
}
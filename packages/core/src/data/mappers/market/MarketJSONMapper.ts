import JSONMapper from '../JSONMapper';
import Market, { MarketInterface } from '../../../domain/entities/market/Market';
import Joi from 'joi';
import NationJSONMapper from '../nation/NationJSONMapper';
import ApplicationErrorFactory from '../../errors/ApplicationErrorFactory';
import ErrorType from '../../../error/ErrorType';

const nationJSONMapper: NationJSONMapper = new NationJSONMapper();
const schema = Joi.object({
  name: Joi.string()
    .required(),
  nation: Joi.object()
    .required(),
});

export default class MarketJSONMapper implements JSONMapper<MarketInterface, Market> {
  public toEntity(json: MarketInterface): Market {
    const params = schema.validate<MarketInterface>(json);
    if (params.error) {
      throw ApplicationErrorFactory.getError(ErrorType.GENERAL, 'Invalid json');
    }
    return new Market(params.value.name, nationJSONMapper.toEntity(params.value.nation));
  }

  public toJSON(entity: Market): MarketInterface {
    return {
      name: entity.name,
      nation: nationJSONMapper.toJSON(entity.nation),
    };
  }
}
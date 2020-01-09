import Joi from 'joi';
import JSONMapper from '../JSONMapper';
import Nation, { NationInterface } from '../../../domain/entities/nation/Nation';
import ApplicationErrorFactory from '../../errors/ApplicationErrorFactory';
import ErrorType from '../../../error/ErrorType';

const schema = Joi.object({
  code: Joi.string()
    .required(),
  name: Joi.string()
    .required(),
});

export default class NationJSONMapper implements JSONMapper<NationInterface, Nation> {
  public toEntity(json: NationInterface): Nation {
    const params = schema.validate<NationInterface>(json);
    if (params.error) {
      throw ApplicationErrorFactory.getError(ErrorType.GENERAL, 'Invalid json');
    }
    return new Nation(params.value.code, params.value.name);
  }

  public toJSON(entity: Nation): NationInterface {
    return {
      code: entity.code,
      name: entity.name,
    };
  }
}
import JSONMapper from '../JSONMapper';
import Nation, { NationInterface } from '../../../domain/entities/nation/Nation';
import ApplicationErrorFactory from '../../errors/ApplicationErrorFactory';
import ErrorType from '../../../error/ErrorType';

export default class NationJSONMapper implements JSONMapper<NationInterface, Nation> {
  public toEntity(json: NationInterface): Nation {
    if (
      !json.code ||
      !json.name
    ) {
      throw ApplicationErrorFactory.getError(ErrorType.GENERAL, 'Invalid json');
    }
    return new Nation(json.code, json.name);
  }

  public toJSON(entity: Nation): NationInterface {
    return {
      code: entity.code,
      name: entity.name,
    };
  }
}
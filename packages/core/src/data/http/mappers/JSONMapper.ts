import Entity from '../../../domain/entities/Entity';

export default interface JSONMapper<S, T extends Entity> {
  toJSON(entity: T): object;

  toEntity(json: object): T;
}
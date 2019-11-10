import Entity from '../../../domain/entities/Entity';

export default interface JSONMapper<T extends Entity> {
  toJSON(entity: T): any;
  toEntity(json: any): T;
}
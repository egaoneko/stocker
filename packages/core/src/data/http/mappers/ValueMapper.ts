import Entity from '../../../domain/entities/Entity';

export default interface ValueMapper<T extends Entity, S extends T> {
  toEntity(entity: T): S | null;
}
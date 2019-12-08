import Entity from '@stocker/core/lib/domain/entities/Entity';
import ValueMapper from '@stocker/core/lib/data/mappers/ValueMapper';

export default interface CSVMapper <T extends Entity> extends ValueMapper<string[], T> {
  toEntity(row: string[]): T;
}
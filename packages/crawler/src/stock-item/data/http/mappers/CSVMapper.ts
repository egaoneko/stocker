import Entity from '@stocker/core/lib/domain/entities/Entity';
import Market from '@stocker/core/lib/domain/entities/market/Market';

export default interface CSVMapper<T extends Entity> {
  toEntity(row: string[], market: Market): T;
}
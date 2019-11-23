import Entity from '@stocker/core/lib/domain/entities/Entity';
import Market from '@stocker/core/lib/domain/entities/market/Market';

export default interface CheerioMapper<T extends Entity> {
  toEntity($: any, element: any, market: Market): T | null;
}
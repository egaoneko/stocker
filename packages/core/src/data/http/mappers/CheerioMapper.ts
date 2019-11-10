import Entity from '../../../domain/entities/Entity';
import Market from '../../../domain/entities/market/Market';

export default interface CheerioMapper<T extends Entity> {
  toEntity($: any, element: any, market: Market): T | null;
}
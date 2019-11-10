import Entity from '../Entity';
import Market from '../market/Market';

export default class StockItem implements Entity {
  constructor(
    public code: string,
    public name: string,
    public market: Market,
  ) {
  }
}

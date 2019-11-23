import Entity from '../Entity';
import Market from '../market/Market';

export default class StockItem implements Entity {
  public gics?: string;
  public wics?: string;
  public wi26?: string;

  constructor(
    public market: Market,
    public code: string,
    public name: string,
  ) {
  }
}

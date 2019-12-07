import Entity from '../Entity';
import Market from '../market/Market';
import { StockItemState } from '../../../enums/stock-item';

export default class StockItem implements Entity {
  public id?: string;
  public market?: Market;
  public gics?: string;
  public wics?: string;
  public state: StockItemState = StockItemState.NONE;

  constructor(
    public code: string,
    public name: string,
  ) {
  }

  public equal(other: StockItem): boolean {
    return this.code === other.code;
  }

  public clone(): StockItem {
    const clone: StockItem = new StockItem(this.code, this.name);
    clone.market = this.market;
    clone.gics = this.gics;
    clone.wics = this.wics;
    return clone;
  }

  public toString(): string {
    return `[${this.code}, ${this.name}, ${this.market && this.market.name}, ${this.gics}, ${this.wics}]`;
  }
}

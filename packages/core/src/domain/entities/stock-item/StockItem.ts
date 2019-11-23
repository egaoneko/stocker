import Entity from '../Entity';
import Market from '../market/Market';

export default class StockItem implements Entity {
  public market?: Market;
  public gics?: string;
  public wics?: string;

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

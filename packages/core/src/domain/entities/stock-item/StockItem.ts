import Entity from '../Entity';
import Market, { MarketInterface } from '../market/Market';
import { StockItemState } from '../../../enums/stock-item';

export interface StockItemInterface {
  id?: string;
  code: string;
  name: string;
  market?: MarketInterface;
  gics?: string;
  wics?: string;
  corpCode?: string;
  state: string;
}

export default class StockItem implements Entity {
  public id?: string;
  public market?: Market;
  public gics?: string;
  public wics?: string;
  public corpCode?: string;
  public state: StockItemState = StockItemState.NONE;

  constructor(
    public code: string,
    public name: string,
  ) {
  }

  public equal(other: StockItem): boolean {
    if (this.code !== other.code) {
      return false;
    }

    if (this.name !== other.name) {
      return false;
    }

    if (!this.market || !other.market) {
      return false;
    }

    if (!this.market.equal(other.market)) {
      return false;
    }

    if (this.corpCode !== other.corpCode) {
      return false;
    }

    if (this.state !== other.state) {
      return false;
    }

    return true;
  }

  public clone(): StockItem {
    const clone: StockItem = new StockItem(this.code, this.name);
    clone.id = this.id;
    clone.market = this.market;
    clone.gics = this.gics;
    clone.wics = this.wics;
    clone.corpCode = this.corpCode;
    clone.state = this.state;
    return clone;
  }

  public toString(): string {
    return [
      this.id,
      this.code,
      this.name,
      this.market && this.market.name,
      this.gics,
      this.wics,
      this.corpCode,
      this.state
    ].join(',');
  }
}

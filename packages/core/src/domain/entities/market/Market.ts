import Entity from '../Entity';
import Nation, { NationInterface } from '../nation/Nation';

export interface MarketInterface {
  name: string;
  nation: NationInterface;
}

export default class Market implements Entity {
  constructor(
    public name: string,
    public nation: Nation,
  ) {
  }

  public equal(other: Market): boolean {
    if (this.name !== other.name) {
      return false;
    }

    if (!this.nation.equal(other.nation)) {
      return false;
    }

    return true;
  }

  public clone(): Market {
    return new Market(this.name, this.nation);
  }

  public toString(): string {
    return [
      this.name,
      this.nation,
    ].join(',');
  }
}

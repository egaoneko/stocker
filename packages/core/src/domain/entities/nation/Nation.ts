import Entity from '../Entity';

export interface NationInterface {
  code: string;
  name: string;
}

export default class Nation implements Entity {
  constructor(
    public code: string,
    public name: string,
  ) {
  }

  public equal(other: Nation): boolean {
    if (this.code !== other.code) {
      return false;
    }

    if (this.name !== other.name) {
      return false;
    }

    return true;
  }

  public clone(): Nation {
    return new Nation(this.code, this.name);
  }

  public toString(): string {
    return [
      this.code,
      this.name,
    ].join(',');
  }
}

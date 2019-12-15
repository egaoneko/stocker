import Entity from '../Entity';

export default class LastBusinessDay implements Entity {
  constructor(
    public date: Date,
  ) {
  }

  public equal(other: LastBusinessDay): boolean {
    return this.date.getTime() === other.date.getTime();
  }

  public clone(): LastBusinessDay {
    return new LastBusinessDay(this.date);
  }

  public toString(): string {
    return [
      this.date,
    ].join(',');
  }
}

import Entity from '../Entity';
import { ScheduleFunction } from '../../../enums/schedule';

export default class Schedule implements Entity {
  constructor(
    public expression: string,
    public scheduleFunction: ScheduleFunction,
    public options: object,
    public lastExecutedTime: Date,
  ) {
  }

  public equal(other: Schedule): boolean {
    if (this.expression !== other.expression) {
      return false;
    }

    if (this.scheduleFunction !== other.scheduleFunction) {
      return false;
    }

    if (JSON.stringify(this.options) !== JSON.stringify(other.options)) {
      return false;
    }

    if (this.lastExecutedTime.getTime() !== other.lastExecutedTime.getTime()) {
      return false;
    }

    return true;
  }

  public clone(): Schedule {
    return new Schedule(
      this.expression,
      this.scheduleFunction,
      {
        ...this.options
      },
      this.lastExecutedTime,
    );
  }

  public toString(): string {
    return [
      this.expression,
      this.scheduleFunction,
      this.options,
      this.lastExecutedTime,
    ].join(',');
  }
}

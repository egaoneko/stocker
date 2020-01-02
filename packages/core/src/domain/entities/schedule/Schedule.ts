import Entity from '../Entity';
import { ScheduleFunction } from '../../../enums/schedule';

export default class Schedule implements Entity {
  public id?: string;
  public options?: object;
  public lastExecutedTime?: Date;

  constructor(
    public expression: string,
    public scheduleFunction: ScheduleFunction,
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

    if (this.lastExecutedTime || other.lastExecutedTime) {
      if (!this.lastExecutedTime) {
        return false;
      }

      if (!other.lastExecutedTime) {
        return false;
      }

      if (this.lastExecutedTime.getTime() !== other.lastExecutedTime.getTime()) {
        return false;
      }
    }

    return true;
  }

  public clone(): Schedule {
    const schedule: Schedule = new Schedule(
      this.expression,
      this.scheduleFunction,
    );
    schedule.id = this.id;
    schedule.options = this.options;
    schedule.lastExecutedTime = this.lastExecutedTime;
    return schedule;
  }

  public toString(): string {
    return [
      this.id,
      this.expression,
      this.scheduleFunction,
      this.options,
      this.lastExecutedTime,
    ].join(',');
  }
}

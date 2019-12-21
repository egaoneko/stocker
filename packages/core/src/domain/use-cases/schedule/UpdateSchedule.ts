import { Observable } from 'rxjs';
import UseCase from '../UseCase';
import Schedule from '../../entities/schedule/Schedule';
import ScheduleRepository from '../../repositories/schedule/ScheduleRepository';

export default class UpdateSchedule extends UseCase<[Schedule, boolean]> {
  public schedule: Schedule | null = null;

  constructor(
    private repository: ScheduleRepository
  ) {
    super();
  }

  protected build(): Observable<[Schedule, boolean]> {
    return this.repository.updateSchedule(this.schedule as Schedule);
  }

  protected validate(): boolean {
    if (!this.schedule) {
      return false;
    }

    if (!this.schedule.id) {
      return false;
    }

    if (!this.schedule.expression) {
      return false;
    }

    if (!this.schedule.scheduleFunction) {
      return false;
    }

    return true;
  }
}

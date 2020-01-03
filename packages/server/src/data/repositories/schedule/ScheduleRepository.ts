import ScheduleRepositoryInterface from '@stocker/core/lib/domain/repositories/schedule/ScheduleRepository';
import { Observable } from 'rxjs';
import Schedule from '@stocker/core/lib/domain/entities/schedule/Schedule';
import { Options } from '@stocker/core/lib/interfaces/repository/options';
import SequelizeScheduleProvider from '../../providers/schedule/SequelizeScheduleProvider';

export default class ScheduleRepository implements ScheduleRepositoryInterface {
  constructor(
    private provider: SequelizeScheduleProvider,
  ) {
  }

  public createSchedule(schedule: Schedule): Observable<[Schedule, boolean]> {
    return this.provider.createSchedule(schedule);
  }

  public updateSchedule(schedule: Schedule): Observable<[Schedule, boolean]> {
    return this.provider.updateSchedule(schedule);
  }

  public deleteSchedule(schedule: Schedule): Observable<[Schedule, boolean]> {
    return this.provider.deleteSchedule(schedule);
  }

  public findSchedulesBy(options: Options): Observable<Schedule[]> {
    return this.provider.findSchedulesBy(options);
  }

  public countSchedules(options: Options): Observable<number> {
    return this.provider.countSchedules(options);
  }
}
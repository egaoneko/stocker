import {
  Observable,
} from 'rxjs';
import Repository from '../Repository';
import Schedule from '../../entities/schedule/Schedule';
import { Options } from '../../../interfaces/repository/options';

export default interface ScheduleRepository extends Repository {
  createSchedule(schedule: Schedule): Observable<[Schedule, boolean]>;

  findSchedulesBy(options: Options): Observable<Schedule[]>;

  updateSchedule(schedule: Schedule): Observable<[Schedule, boolean]>;

  deleteSchedule(schedule: Schedule): Observable<[Schedule, boolean]>;

  countSchedules(options: Options): Observable<number>;

  // --ADD_METHOD--
}
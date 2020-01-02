import { Observable } from 'rxjs';
import { fromPromise } from 'rxjs/internal-compatibility';
import { Transaction } from 'sequelize';
import Schedule from '../../models/schedule/Schedule';
import ScheduleEntity from '@stocker/core/lib/domain/entities/schedule/Schedule';
import { Options } from '@stocker/core/lib/interfaces/repository/options';
import ApplicationErrorFactory from '@stocker/core/lib/data/errors/ApplicationErrorFactory';
import ErrorType from '@stocker/core/lib/error/ErrorType';

export default class SequelizeScheduleProvider {
  public createSchedule(schedule: ScheduleEntity, transaction?: Transaction): Observable<[ScheduleEntity, boolean]> {
    return fromPromise(
      Schedule.createSchedule(schedule, transaction)
        .then(
          ([schedule, created]: [Schedule, boolean]): [ScheduleEntity, boolean] => [schedule.toEntity(), created]
        )
    );
  }

  public updateSchedule(schedule: ScheduleEntity, transaction?: Transaction): Observable<[ScheduleEntity, boolean]> {
    return fromPromise(
      Schedule.updateSchedule(schedule, transaction)
        .then(
          ([rows]: [number, Schedule[]]): [ScheduleEntity, boolean] => {
            if (rows === 0) {
              return [schedule, false];
            }

            if (rows > 1) {
              throw ApplicationErrorFactory.getError(ErrorType.GENERAL, `Too many updated.`);
            }

            return [schedule, true];
          }
        )
    );
  }

  public deleteSchedule(schedule: ScheduleEntity, transaction?: Transaction): Observable<[ScheduleEntity, boolean]> {
    return fromPromise(
      Schedule.deleteSchedule(schedule, transaction)
        .then(
          (rows: number): [ScheduleEntity, boolean] => {
            if (rows === 0) {
              return [schedule, false];
            }

            if (rows > 1) {
              throw ApplicationErrorFactory.getError(ErrorType.GENERAL, `Too many deleted.`);
            }

            return [schedule, true];
          }
        )
    )
  }

  public findSchedulesBy(options: Options): Observable<ScheduleEntity[]> {
    return fromPromise(
      Schedule.findSchedulesBy(options)
        .then((schedules: Schedule[] | null): ScheduleEntity[] => {
          if (!schedules) {
            return [];
          }

          return schedules.map((schedule: Schedule): ScheduleEntity => schedule.toEntity());
        })
    );
  }

  public countSchedules(options: Options): Observable<number> {
    return fromPromise(Schedule.countSchedules(options));
  }
}
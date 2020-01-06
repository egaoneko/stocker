import {
  Table,
  Model as DBModel,
  DataType,
  Column,
  PrimaryKey,
  Default,
  AllowNull,
  Unique,
} from 'sequelize-typescript';
import { Model } from '@stocker/core/lib/data/models/Model';
import ScheduleEntity from '@stocker/core/lib/domain/entities/schedule/Schedule';
import {
  Transaction
} from 'sequelize';
import { Options } from '@stocker/core/lib/interfaces/repository/options';
import ApplicationErrorFactory from '@stocker/core/lib/data/errors/ApplicationErrorFactory';
import ErrorType from '@stocker/core/lib/error/ErrorType';
import { generateFindOptions } from '../../../utils/sequelize';
import { ScheduleFunction } from '@stocker/core/lib/enums/schedule';

@Table({
  tableName: 'schedules'
})
export default class Schedule extends DBModel<Schedule> implements Model {
  @PrimaryKey
  @Default(DataType.UUIDV1)
  @Column(DataType.UUID)
  public id!: string;

  @Column(DataType.STRING)
  public expression!: string;

  @Unique
  @Column(DataType.STRING)
  public scheduleFunction!: ScheduleFunction;

  @Column(DataType.INTEGER)
  public priority!: number;

  @Column(DataType.STRING)
  public options!: string;

  @AllowNull(true)
  @Column(DataType.DATE)
  public lastExecutedTime?: Date;

  public static createSchedule(schedule: ScheduleEntity, transaction?: Transaction): Promise<[Schedule, boolean]> {
    const { expression, scheduleFunction, priority, options, lastExecutedTime }: ScheduleEntity = schedule;
    return Schedule.findOrCreate({
      where: {
        scheduleFunction: scheduleFunction,
      },
      defaults: {
        expression,
        scheduleFunction,
        priority,
        lastExecutedTime,
        options: JSON.stringify(options),
      },
      transaction,
    });
  }

  public static updateSchedule(schedule: ScheduleEntity, transaction?: Transaction): Promise<[number, Schedule[]]> {
    const { id, expression, scheduleFunction, priority, options, lastExecutedTime }: ScheduleEntity = schedule;

    if (!id) {
      throw ApplicationErrorFactory.getError(ErrorType.GENERAL, 'id is empty.');
    }

    return Schedule.update({
      expression,
      scheduleFunction,
      priority,
      lastExecutedTime,
      options: JSON.stringify(options),
    }, {
      where: {
        id: id,
      },
      transaction,
    });
  }

  public static deleteSchedule(schedule: ScheduleEntity, transaction?: Transaction): Promise<number> {
    const { id }: ScheduleEntity = schedule;

    if (!id) {
      throw ApplicationErrorFactory.getError(ErrorType.GENERAL, 'id is empty.');
    }

    return Schedule.destroy({
      where: {
        id: id as string,
      },
      transaction,
    });
  }

  public static findSchedulesBy(options: Options): Promise<Schedule[] | null> {
    return Schedule.findAll(generateFindOptions(options))
  }

  public static countSchedules(options: Options): Promise<number> {
    return Schedule.count(generateFindOptions(options));
  }

  public toEntity(): ScheduleEntity {
    const schedule: ScheduleEntity = new ScheduleEntity(
      this.expression,
      this.scheduleFunction,
      this.priority,
    );

    schedule.id = this.id;
    schedule.options = JSON.parse(this.options);
    schedule.lastExecutedTime = this.lastExecutedTime;

    return schedule;
  }
}
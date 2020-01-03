import {
  Observable,
  of
} from 'rxjs';
import Schedule from '@stocker/core/lib/domain/entities/schedule/Schedule';
import { Options } from '@stocker/core/lib/interfaces/repository/options';
import { DEFAULT_SCHEDULE } from './constant';

export const mockCreateSchedule = jest.fn().mockImplementation((schedule: Schedule): Observable<[Schedule, boolean]> => {
  return of([schedule, true]);
});

export const mockUpdateSchedule = jest.fn().mockImplementation((schedule: Schedule): Observable<[Schedule, boolean]> => {
  return of([schedule, true]);
});


export const mockDeleteSchedule = jest.fn().mockImplementation((schedule: Schedule): Observable<[Schedule, boolean]> => {
  return of([schedule, true]);
});


export const mockFindSchedulesBy = jest.fn().mockImplementation((options: Options): Observable<Schedule[]> => {
  return of([DEFAULT_SCHEDULE]);
});


export const mockCountSchedules = jest.fn().mockImplementation((options: Options): Observable<number> => {
  return of(1);
});

const mockSequelizeScheduleProvider = jest.fn().mockImplementation(() => {
  return {
    createSchedule: mockCreateSchedule,
    updateSchedule: mockUpdateSchedule,
    deleteSchedule: mockDeleteSchedule,
    findSchedulesBy: mockFindSchedulesBy,
    countSchedules: mockCountSchedules,
  };
});

export default mockSequelizeScheduleProvider;
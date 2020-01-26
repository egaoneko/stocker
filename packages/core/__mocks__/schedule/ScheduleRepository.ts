import {
  Observable,
  of
} from 'rxjs';
import Schedule from '../../src/domain/entities/schedule/Schedule';
import { Options } from '../../src/interfaces/repository/options';
import { DEFAULT_SCHEDULE } from './constant';

// --ADD_IMPORT--

const cache: Map<string, Schedule> = new Map();
reset();

export function reset(empty: boolean = false): void {
  cache.clear();

  if (empty) {
    return;
  }
  const schedule: Schedule = DEFAULT_SCHEDULE;
  cache.set(schedule.id as string, schedule);
}

export const mockCreateSchedule = jest.fn().mockImplementation((schedule: Schedule): Observable<[Schedule, boolean]> => {
  if (cache.has(schedule.id as string)) {
    return of([cache.get(schedule.id as string) as Schedule, false]);
  } else {
    cache.set(schedule.id as string, schedule);
    return of([schedule, true]);
  }
});
export const mockFindSchedulesBy = jest.fn().mockImplementation((options: Options): Observable<Schedule[]> => {
  return of(Array.from(cache.values()));
});
export const mockUpdateSchedule = jest.fn().mockImplementation((schedule: Schedule): Observable<[Schedule, boolean]> => {
  if (cache.has(schedule.id as string)) {
    cache.set(schedule.id as string, schedule);
    return of([cache.get(schedule.id as string) as Schedule, true]);
  } else {
    return of([schedule, false]);
  }
});
export const mockDeleteSchedule = jest.fn().mockImplementation((schedule: Schedule): Observable<[Schedule, boolean]> => {
  if (cache.has(schedule.id as string)) {
    cache.set(schedule.id as string, schedule);
    return of([cache.get(schedule.id as string) as Schedule, true]);
  } else {
    return of([schedule, false]);
  }
});
export const mockCountSchedules = jest.fn().mockImplementation((options: Options): Observable<number> => {
  return of(cache.size);
});
// --ADD_METHOD--

const mockScheduleRepository = jest.fn().mockImplementation(() => {
  return {
    createSchedule: mockCreateSchedule,
    findSchedulesBy: mockFindSchedulesBy,
    updateSchedule: mockUpdateSchedule,
    deleteSchedule: mockDeleteSchedule,
    countSchedules: mockCountSchedules,
    // --APPLY_METHOD--
  };
});

export default mockScheduleRepository;
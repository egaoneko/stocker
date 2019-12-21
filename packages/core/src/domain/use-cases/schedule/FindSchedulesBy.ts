import { Observable } from 'rxjs';
import UseCase from '../UseCase';
import Schedule from '../../entities/schedule/Schedule';
import ScheduleRepository from '../../repositories/schedule/ScheduleRepository';
import { Options } from '../../../interfaces/repository/options';

export default class FindSchedulesBy extends UseCase<Schedule[]> {
  public options: Options = {};

  constructor(
    private repository: ScheduleRepository
  ) {
    super();
  }

  protected build(): Observable<Schedule[]> {
    return this.repository.findSchedulesBy(this.options);
  }
}

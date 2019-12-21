import { Observable } from 'rxjs';
import UseCase from '../UseCase';
import ScheduleRepository from '../../repositories/schedule/ScheduleRepository';
import { Options } from '../../../interfaces/repository/options';

export default class CountSchedules extends UseCase<number> {
  public options: Options = {};

  constructor(
    private repository: ScheduleRepository
  ) {
    super();
  }

  protected build(): Observable<number> {
    return this.repository.countSchedules(this.options);
  }
}

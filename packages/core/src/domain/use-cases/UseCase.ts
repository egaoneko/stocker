import {
  Observable,
  SchedulerLike,
} from 'rxjs';
import {
  subscribeOn,
  observeOn
} from 'rxjs/operators';
import applicationErrorFactory from '../../data/errors/ApplicationErrorFactory';
import ErrorType from '../../error/ErrorType';

export default abstract class UseCase<T> {
  protected abstract build(): Observable<T>;

  protected abstract validate(): boolean;

  public run(
    executorScheduler: SchedulerLike,
    postExecutionScheduler: SchedulerLike
  ): Observable<T> {
    if (!this.validate()) {
      throw applicationErrorFactory.getError(ErrorType.GENERAL, 'Invalid params in UseCase');
    }

    return this.build()
      .pipe(
        subscribeOn(executorScheduler),
        observeOn(postExecutionScheduler)
      );
  }
}

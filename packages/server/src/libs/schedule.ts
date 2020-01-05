import { CronJob } from 'cron';
import { CONTEXT } from '../constant';
import { async } from 'rxjs/internal/scheduler/async';
import { queue } from 'rxjs/internal/scheduler/queue';
import Schedule from '@stocker/core/lib/domain/entities/schedule/Schedule';

const initialize = async () => {
  const schedules: Schedule[] = await CONTEXT.useCases.findSchedulesBy
    .runOnce(async, queue)
    .toPromise();

  console.log(schedules);

  new CronJob('* * * * *', () => {
    console.log('running a task every minute');
  }, () => {}, true, 'Asia/Seoul');
};

export {
  initialize,
}
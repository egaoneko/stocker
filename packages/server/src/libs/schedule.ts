import { CronJob } from 'cron';
import { CONTEXT } from '../constant';
import { async } from 'rxjs/internal/scheduler/async';
import { queue } from 'rxjs/internal/scheduler/queue';
import * as moment from 'moment-timezone';
import Schedule from '@stocker/core/lib/domain/entities/schedule/Schedule';
import { ScheduleFunction } from '@stocker/core/lib/enums/schedule';
import { apply } from '@stocker/core/lib/utils/common';
import FindSchedulesBy from '@stocker/core/lib/domain/use-cases/schedule/FindSchedulesBy';
import { saveStockItems } from '../utils/stock-item';
import UpdateSchedule from '@stocker/core/lib/domain/use-cases/schedule/UpdateSchedule';

const initialize = async () => {
  const schedules: Schedule[] = await apply(
    CONTEXT.useCases.findSchedulesBy, (it: FindSchedulesBy) => it.options = { sort: [['priority', 'DESC']] }
  )
    .runOnce(async, queue)
    .toPromise();

  console.log(schedules);

  for (let idx: number = 0; idx < schedules.length; idx += 1) {
    const schedule: Schedule = schedules[idx];
    new CronJob(schedule.expression, () => {
      runJob(schedule);
    }, () => {
    }, true, 'Asia/Seoul');
  }
};

async function runJob(schedule: Schedule): Promise<void> {
  console.info(`Job ${schedule.scheduleFunction}`);
  switch (schedule.scheduleFunction) {
    case ScheduleFunction.CRAWL_STOCK_ITEMS:
      await saveStockItems();
      schedule.lastExecutedTime = moment.tz('Asia/Seoul').toDate();
      await apply(CONTEXT.useCases.updateSchedule, (it: UpdateSchedule) => it.schedule = schedule)
        .runOnce(async, queue)
        .toPromise();
      break;
    case ScheduleFunction.CRAWL_STOCK_ITEM:
      break;
  }
}

export {
  initialize,
}
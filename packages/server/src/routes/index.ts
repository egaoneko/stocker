import Router from 'koa-router';

import ping from './ping';
import account from './account';
import stockItem from './stock-item';
import schedule from './schedule';

const router: Router = new Router();

router.use(
  '',
  ping.routes(),
  account.routes(),
  stockItem.routes(),
  schedule.routes(),
);

export default router;
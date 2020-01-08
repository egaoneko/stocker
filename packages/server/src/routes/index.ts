import Router from 'koa-router';

import ping from './ping';
import stockItem from './stock-item';
import schedule from './schedule';

const router: Router = new Router();

router.use('', ping.routes());
router.use('/stock-items', stockItem.routes());
router.use('/schedules', schedule.routes());

export default router;
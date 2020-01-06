import Router from 'koa-router';

import ping from './ping';
import stockItem from './stock-item';
import schedule from './schedule';

const router: Router = new Router();

router.use('', ping.routes());
router.use('/stock-item', stockItem.routes());
router.use('/schedule', schedule.routes());

export default router;
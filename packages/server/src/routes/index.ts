import Router from 'koa-router';

import ping from './ping';
import stockItem from './stock-item';

const router: Router = new Router();

router.use('/', ping.routes());
router.use('/stock-item', stockItem.routes());

export default router;
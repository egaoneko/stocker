import Router from 'koa-router';
import {
  count,
  crawl,
  findAll
} from '../controllers/stock-item';
import {
  ICustom,
  IState
} from '../Server';
import needsAuth from '../middlewares/needsAuth';

const router: Router<IState, ICustom> = new Router();

router.get('/crawl/stock-items', needsAuth, crawl);
router.get('/stock-items', needsAuth, findAll);
router.get('/count/stock-items', needsAuth, count);

export default router;

import Router from 'koa-router';
import {
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

export default router;

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

// @ts-ignore
router.get('/crawl', needsAuth, crawl);
router.get('/', needsAuth, findAll);

export default router;

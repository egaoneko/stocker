import Router from 'koa-router';
import {
  ICustom,
  IState
} from '../Server';
import needsAuth from '../middlewares/needsAuth';
import {
  create,
  update
} from '../controllers/schedule';

const router: Router<IState, ICustom> = new Router();

router.post('/schedules', needsAuth, create);
router.put('/schedules', needsAuth, update);

export default router;

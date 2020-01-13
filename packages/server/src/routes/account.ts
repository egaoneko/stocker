import Router from 'koa-router';
import {
  ICustom,
  IState
} from '../Server';
import { create } from '../controllers/account';

const router: Router<IState, ICustom> = new Router();

// @ts-ignore
router.post('/users', create);

export default router;

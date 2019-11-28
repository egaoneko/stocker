import Router from 'koa-router';
import { ping } from '../controllers/ping';
import {
  ICustom,
  IState
} from '../Server';

const router: Router<IState, ICustom> = new Router();

// @ts-ignore
router.get('/ping', ping);

export default router;

import * as Router from 'koa-router';
import { ping } from '../controllers/common';

const router = new Router();

router.get('/ping', ping);

export default router;

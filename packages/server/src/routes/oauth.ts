import Router from 'koa-router';
import { ping } from '../controllers/ping';
import {
  ICustom,
  IState
} from '../Server';
import {
  googleCallback,
  googleLogin
} from '../controllers/oauth';

const router: Router<IState, ICustom> = new Router();
const PREFIX: string = '/oauth';

/**
 * @swagger
 * /oauth/google:
 *   get:
 *     summary: Authenticate google.
 *     tags: [Oauth]
 */
router.get(PREFIX + '/google', googleLogin);

/**
 * @swagger
 * /oauth/google/callback:
 *   get:
 *     summary: Callback after authenticate google.
 *     tags: [Oauth]
 */
router.get(PREFIX + '/google/callback', googleCallback, (req, res) => {
  console.log('req', req);
});

export default router;

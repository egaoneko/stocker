import passport from 'koa-passport';

export const googleLogin = passport.authenticate(
  'google',
  {
    session: false,
    scope: ['email', 'profile', 'openid']
  },
);

export const googleCallback = passport.authenticate(
  'google',
  {
    session: false,
    failureRedirect: '/error/500',
  },
);

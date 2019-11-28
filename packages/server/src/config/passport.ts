import passport from 'koa-passport';
import passportGoogle from 'passport-google-oauth20';

// for web
// common user for fms
const GoogleStrategy = passportGoogle.Strategy;

const {
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
} = process.env as { [key: string]: string };

/**
 * Google passport for web dashboard
 */
passport.use(new GoogleStrategy({
  clientID: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
  callbackURL: '/oauth/google/callback',
}, async (accessToken: string, refreshToken: any, profile: any, done: any) => {
  console.log(accessToken, refreshToken, profile);
  done(null, accessToken);
}));

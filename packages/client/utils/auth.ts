import React from 'react'
import nextCookie from 'next-cookies'
import cookie from 'js-cookie'
import { signIn } from './router';
import { NextPageContext } from 'next';
import {
  IS_SERVER,
  TOKEN_NAME
} from '../constant/common';

export const getToken: () => string | null = () => {
  return cookie.get(TOKEN_NAME) || null;
};

export const signedIn: (token: string) => void = (token: string): void => {
  cookie.set(TOKEN_NAME, token, { expires: 1 });
};

export const signedOut: () => void = () => {
  cookie.remove(TOKEN_NAME);
  // to support signing out from all windows
  window.localStorage.setItem('sign-out', Date.now().toString());
};

export const auth = (ctx: NextPageContext): string | null => {
  const token: string = nextCookie(ctx)[TOKEN_NAME] || '';

  // If there's no token, it means the user is not logged in.
  if (!token) {
    if (IS_SERVER && ctx.res) {
      ctx.res.writeHead(302, { Location: '/sign-in' });
      ctx.res.end();
    } else {
      signIn();
    }
  }

  return token || null;
};

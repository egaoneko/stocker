import React, { useEffect } from 'react'
import Router from 'next/router'
import nextCookie from 'next-cookies'
import cookie from 'js-cookie'
import { signIn } from './router';
import {
  NextPage,
  NextPageContext
} from 'next';
import {
  IS_SERVER,
  TOKEN_NAME
} from '../constant/common';
import { CONTEXT } from '../constant';
import { async } from 'rxjs/internal/scheduler/async';
import { queue } from 'rxjs/internal/scheduler/queue';
import User from '@stocker/core/lib/domain/entities/account/User';

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

export interface AuthProps {
  token?: string | null;
}

export function withAuthSync<T = {}>(WrappedComponent: NextPage<T>): NextPage<T & AuthProps> {
  const Wrapper: NextPage<T & AuthProps> = (props: T) => {
    const syncSignOut: (event: StorageEvent) => void = (event: StorageEvent): void => {
      if (event.key === 'sign-out') {
        console.info('logged out from storage!');
        Router.push('/');
      }
    };

    useEffect(() => {
      window.addEventListener('storage', syncSignOut);
      CONTEXT.useCases.getCurrentUser
        .runOnce(async, queue)
        .subscribe((user: User | null) => {
          if (user) {
            return;
          }
          Router.push('/sign-in');
        });

      return () => {
        window.removeEventListener('storage', syncSignOut);
        window.localStorage.removeItem('sign-out')
      }
    }, []);

    return <WrappedComponent {...props} />;
  };

  Wrapper.getInitialProps = async (ctx: NextPageContext): Promise<T & AuthProps> => {
    const token: string | null = auth(ctx);

    const componentProps: T | undefined =
      WrappedComponent.getInitialProps &&
      (await WrappedComponent.getInitialProps(ctx));

    return { ...componentProps, token } as T & AuthProps;
  };

  return Wrapper;
}
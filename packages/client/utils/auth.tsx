import React, { useEffect } from 'react'
import Router from 'next/router'
import nextCookie from 'next-cookies'
import cookie from 'js-cookie'
import { signIn } from './router';
import {
  NextPage,
  NextPageContext
} from 'next';
import { IS_SERVER } from '../constant/common';

export const signedIn: (token: string) => void = (token: string): void => {
  cookie.set('S_TOKEN', token, { expires: 1 });
};

export const signedOut: () => void = () => {
  cookie.remove('S_TOKEN');
  // to support signing out from all windows
  window.localStorage.setItem('sign-out', Date.now().toString());
};

export const auth = (ctx: NextPageContext): string | null => {
  const { S_TOKEN } = nextCookie(ctx);

  // If there's no token, it means the user is not logged in.
  if (!S_TOKEN) {
    if (IS_SERVER && ctx.res) {
      ctx.res.writeHead(302, { Location: '/sign-in' });
      ctx.res.end();
    } else {
      signIn();
    }
  }

  return S_TOKEN || null;
};

export interface AuthProps {
  token?: string | null;
}

export function withAuthSync<T = {}>(WrappedComponent: NextPage<T>): NextPage<T & AuthProps> {
  const Wrapper: NextPage<T & AuthProps> = (props: T) => {
    const syncSignOut: (event: StorageEvent) => void = (event: StorageEvent): void => {
      if (event.key === 'sign-out') {
        console.log('logged out from storage!');
        Router.push('/');
      }
    };

    useEffect(() => {
      window.addEventListener('storage', syncSignOut);

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
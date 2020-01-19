import {
  NextPage,
  NextPageContext
} from 'next';
import Router from 'next/router';
import React, { useEffect } from 'react';
import { CONTEXT } from '../constant';
import { async } from 'rxjs/internal/scheduler/async';
import { queue } from 'rxjs/internal/scheduler/queue';
import User from '@stocker/core/lib/domain/entities/account/User';
import { auth } from '../utils/auth';

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

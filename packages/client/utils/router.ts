import Router from 'next/router';

export const main: () => void = () => {
  Router.push('/');
};

export const signIn: () => void = () => {
  Router.push('/sign-in');
};
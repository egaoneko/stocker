import Router from 'next/router';

export const main: () => void = () => {
  Router.push('/');
};

export const login: () => void = () => {
  Router.push('/sign-in');
};
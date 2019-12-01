import React from 'react';
import HeaderLayoutTemplate from '../components/templates/layout/HeaderLayoutTemplate';
import {
  AuthProps,
  withAuthSync
} from '../utils/auth';
import { NextPage } from 'next';

interface PropsType extends AuthProps {
}

const Home: NextPage<PropsType> = withAuthSync((): JSX.Element => {
  return (
    <HeaderLayoutTemplate/>
  );
});

export default Home;
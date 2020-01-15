import React from 'react';
import HeaderLayoutTemplate from '../../../components/templates/layout/HeaderLayoutTemplate';
import {
  AuthProps,
  withAuthSync
} from '../../../utils/auth';
import { NextPage } from 'next';
import useStores from '../../../utils/mobx';
import { observer } from 'mobx-react';
import HomeTemplate from '../../templates/main/HomeTemplate';

interface PropsType extends AuthProps {
  namespacesRequired?: string[];
}

const HomePage: NextPage<PropsType> = (): JSX.Element => {
  const { rootStore } = useStores();

  return (
    <HeaderLayoutTemplate user={rootStore.user}>
      <HomeTemplate/>
    </HeaderLayoutTemplate>
  );
};

HomePage.getInitialProps = async (): Promise<PropsType> => ({
  namespacesRequired: ['common'],
});

export default withAuthSync(observer(HomePage));
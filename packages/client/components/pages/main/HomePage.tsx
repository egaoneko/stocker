import React from 'react';
import HeaderLayoutTemplate from '../../../components/templates/layout/HeaderLayoutTemplate';
import { NextPage } from 'next';
import useStores from '../../../utils/mobx';
import { observer } from 'mobx-react';
import HomeContainer from '../../templates/main/HomeContainer';
import {
  AuthProps,
  withAuthSync
} from '../../../hocs/auth';

interface PropsType extends AuthProps {
}

const HomePage: NextPage<PropsType> = (): JSX.Element => {
  const { rootStore } = useStores();

  return (
    <HeaderLayoutTemplate user={rootStore.user}>
      <HomeContainer/>
    </HeaderLayoutTemplate>
  );
};



export default withAuthSync(observer(HomePage));
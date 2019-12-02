import React from 'react';
import HeaderLayoutTemplate from '../components/templates/layout/HeaderLayoutTemplate';
import {
  AuthProps,
  withAuthSync
} from '../utils/auth';
import {
  useTranslation,
} from '../i18n';
import { NextPage } from 'next';

interface PropsType extends AuthProps {
  namespacesRequired?: string[];
}

const Home: NextPage<PropsType> = (): JSX.Element => {
  const { t, i18n } = useTranslation('common');
  return (
    <HeaderLayoutTemplate>
      <p onClick={() => {
        console.log(i18n);
        (i18n as any).changeLanguage((i18n as any).language === 'kr' ? 'en' : 'kr');
      }}>{t('greet')}</p>
    </HeaderLayoutTemplate>
  );
};

Home.getInitialProps = async (): Promise<PropsType> => ({
  namespacesRequired: ['common'],
});

export default withAuthSync(Home);
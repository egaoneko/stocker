import React, { useEffect } from 'react';
import HeaderLayoutTemplate from '../components/templates/layout/HeaderLayoutTemplate';
import {
  AuthProps,
  getToken,
  withAuthSync
} from '../utils/auth';
import {
  useTranslation,
} from '../i18n';
import { NextPage } from 'next';
import { API_SEVER } from '../constant/common';

interface PropsType extends AuthProps {
  namespacesRequired?: string[];
}

const Home: NextPage<PropsType> = (): JSX.Element => {
  const { t, i18n } = useTranslation('common');

  useEffect(() => {
    (async () => {
      const token: string | null = getToken() || '';

      if (!token) {
        return;
      }

      const headers: Headers = new Headers();
      headers.append('Authorization', `Bearer ${token}`);

      const res: Response = await fetch(API_SEVER + '/stock-item/crawl', { headers });
      console.log(res);
    })();

  }, []);
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
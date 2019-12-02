import React from 'react';
import { useTranslation } from '../i18n';
import { NextPage } from 'next';

interface PropsType {
  statusCode?: number;
  namespacesRequired?: string[];
}

const Error: NextPage<PropsType> = ({ statusCode }: PropsType): JSX.Element => {
  const { t, i18n } = useTranslation('common');
  return (
    <p>
      {statusCode
        ? t('error-with-status', { statusCode })
        : t('error-without-status')}
    </p>
  )
};

Error.getInitialProps = async (): Promise<PropsType> => ({
  namespacesRequired: ['common'],
});

export default Error;
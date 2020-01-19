import React from 'react';
import HomePage from '../components/pages/main/HomePage';
import { NextPage } from 'next';

interface PropsType {
  namespacesRequired?: string[];
}

const index: NextPage<PropsType> = () => <HomePage/>;

index.getInitialProps = async (): Promise<PropsType> => ({
  namespacesRequired: ['common'],
});

export default index;
import React from 'react';
import FullLayout from '../../organisms/layout/FullLayout';
import HeaderNav from '../../organisms/layout/HeaderNav';
import FullContent from '../../organisms/layout/FullContent';

export default function FullPage(): JSX.Element {
  return (
    <FullLayout>
      <HeaderNav selectedKey={'stocker'}/>
      <FullContent/>
    </FullLayout>
  );
}
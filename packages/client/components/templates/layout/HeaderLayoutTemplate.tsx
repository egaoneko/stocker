import React from 'react';
import FullLayout from '../../organisms/layout/FullLayout';
import HeaderNav from '../../organisms/layout/HeaderNav';
import FullContent from '../../organisms/layout/FullContent';

interface PropsType {
  children?: React.ReactNode;
}

export default function HeaderLayoutTemplate({ children }: PropsType): JSX.Element {
  return (
    <FullLayout>
      <HeaderNav selectedKey={'stocker'}/>
      <FullContent>
        {children}
      </FullContent>
    </FullLayout>
  );
}
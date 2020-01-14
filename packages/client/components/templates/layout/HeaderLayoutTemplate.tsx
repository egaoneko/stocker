import React from 'react';
import FullLayout from '../../organisms/layout/FullLayout';
import HeaderNav from '../../organisms/layout/HeaderNav';
import FullContent from '../../organisms/layout/FullContent';
import User from '@stocker/core/lib/domain/entities/account/User';

interface PropsType {
  children?: React.ReactNode;
  user?: User | null;
}

const HeaderLayoutTemplate: (props: PropsType) => JSX.Element = ({ children, user }: PropsType): JSX.Element => {
  return (
    <FullLayout>
      <HeaderNav
        selectedKey={'stocker'}
        user={user}/>
      <FullContent>
        {children}
      </FullContent>
    </FullLayout>
  );
};

export default HeaderLayoutTemplate;
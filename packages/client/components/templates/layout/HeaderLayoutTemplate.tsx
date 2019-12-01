import React from 'react';
import FullLayout from '../../organisms/layout/FullLayout';
import HeaderNav from '../../organisms/layout/HeaderNav';
import FullContent from '../../organisms/layout/FullContent';
import { observer } from 'mobx-react';

interface PropsType {
  children?: React.ReactNode;
}

const HeaderLayoutTemplate: (props: PropsType) => JSX.Element = observer(({ children }: PropsType): JSX.Element => {
  return (
    <FullLayout>
      <HeaderNav selectedKey={'stocker'}/>
      <FullContent>
        {children}
      </FullContent>
    </FullLayout>
  );
});

export default HeaderLayoutTemplate;
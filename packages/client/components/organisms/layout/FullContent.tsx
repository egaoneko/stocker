import React, { ReactNode } from 'react';
import {
  Layout,
} from 'antd';

interface PropsType {
  children?: ReactNode;
}

const { Content } = Layout;
const FullContent: (props: PropsType) => JSX.Element = ({ children }: PropsType): JSX.Element => {

  return (
    <Content>
      {children}
    </Content>
  );
};

export default FullContent;

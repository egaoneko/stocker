import React, { ReactNode } from 'react';
import {
  Layout,
} from 'antd';

interface PropsType {
  children?: ReactNode;
}

const { Content } = Layout;
export default function FullContent({ children }: PropsType): JSX.Element {

  return (
    <Content>
      {children}
    </Content>
  );
}

import '../../../styled/antd.less';
import React from 'react';
/** @jsx jsx */
import {
  jsx,
  css,
  SerializedStyles,
} from '@emotion/core';
import {
  Layout,
} from 'antd';

interface PropsType {
  children?: React.ReactNode;
}

const BaseLayout: (props: PropsType) => JSX.Element = ({ children }: PropsType): JSX.Element => {
  return (
    <Layout css={layout}>
      {children}
    </Layout>
  );
};

const layout: SerializedStyles = css`
  height: 100%;
`;

export default BaseLayout;
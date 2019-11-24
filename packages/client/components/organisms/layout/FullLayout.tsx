// @ts-ignore
import stylesheet from 'antd/dist/antd.min.css';
import React from 'react';
/** @jsx jsx */
import {
  jsx,
  css,
  SerializedStyles,
  Global,
} from '@emotion/core';
import {
  Layout,
} from 'antd';

interface PropsType {
  children?: React.ReactNode;
}

export default function FullLayout({ children }: PropsType): JSX.Element {
  return (
    <Layout css={layout}>
      <Global
        styles={global}
      />
      <style dangerouslySetInnerHTML={{ __html: stylesheet }}/>
      {children}
    </Layout>
  );
}

const global: SerializedStyles = css`
  html,
  body,
  body > div:first-child,
  div#__next {
    height: 100%;
  }
`;

const layout: SerializedStyles = css`
  height: 100%;
`;
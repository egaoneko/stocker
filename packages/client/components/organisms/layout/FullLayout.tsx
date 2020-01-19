import React from 'react';
/** @jsx jsx */
import {
  jsx,
  css,
  SerializedStyles,
  Global,
} from '@emotion/core';
import BaseLayout from './BaseLayout';

interface PropsType {
  children?: React.ReactNode;
}

const FullLayout: (props: PropsType) => JSX.Element = ({ children }: PropsType): JSX.Element => {
  return (
    <BaseLayout>
      <Global
        styles={global}
      />
      {children}
    </BaseLayout>
  );
};

const global: SerializedStyles = css`
  html,
  body,
  body > div:first-of-type,
  div#__next {
    height: 100%;
  }
`;

export default FullLayout;
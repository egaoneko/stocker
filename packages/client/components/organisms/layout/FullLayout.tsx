import React from 'react';
/** @jsx jsx */
import {
  jsx,
  css,
  SerializedStyles,
  Global,
} from '@emotion/core';
import BaseContainer from './BaseContainer';

interface PropsType {
  children?: React.ReactNode;
}

export default function FullLayout({ children }: PropsType): JSX.Element {
  return (
    <BaseContainer>
      <Global
        styles={global}
      />
      {children}
    </BaseContainer>
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

import '../../../styles/antd.less';
import React from 'react';
/** @jsx jsx */
import {
  jsx,
  css,
  SerializedStyles,
} from '@emotion/core';

interface PropsType {
  children?: React.ReactNode;
}

export default function CenterContainer({ children }: PropsType): JSX.Element {
  return (
    <div css={container}>
      {children}
    </div>
  );
}

const container: SerializedStyles = css`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
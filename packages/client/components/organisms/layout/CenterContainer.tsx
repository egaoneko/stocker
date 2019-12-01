import '../../../styled/antd.less';
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

const CenterContainer: (props: PropsType) => JSX.Element = ({ children }: PropsType): JSX.Element => {
  return (
    <div css={container}>
      {children}
    </div>
  );
};

const container: SerializedStyles = css`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default CenterContainer;
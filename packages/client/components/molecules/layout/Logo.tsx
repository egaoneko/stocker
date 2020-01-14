import React, { CSSProperties } from 'react';
/** @jsx jsx */
import {
  jsx,
} from '@emotion/core';

interface PropsType {
  width: number;
  height: number;
  imageUrl: string;
  style?: CSSProperties;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const Logo: (props: PropsType) => JSX.Element = (props: PropsType): JSX.Element => {
  const {
    width,
    height,
    imageUrl,
    style,
    onClick
  }: PropsType = props;
  return (
    <div
      css={{
        width,
        height,
        backgroundImage: `url(${imageUrl})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        cursor: onClick ? 'pointer' : 'auto',
        ...style
      }}
      onClick={onClick}/>
  );
};

export default Logo;
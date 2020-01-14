import React from 'react';
import { Avatar as AntAvatar } from 'antd';
/** @jsx jsx */
import {
  jsx,
} from '@emotion/core';
import User from '@stocker/core/lib/domain/entities/account/User';

interface PropsType {
  user?: User | null;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const Avatar: (props: PropsType) => JSX.Element = (props: PropsType): JSX.Element => {
  const {
    user,
    onClick,
  }: PropsType = props;
  return (
    <div
      onClick={onClick}>
      <AntAvatar
        icon="user"
        src={user && user.photo || ''}/>
    </div>
  );
};

export default Avatar;
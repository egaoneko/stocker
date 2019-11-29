import React, { CSSProperties } from 'react';
/** @jsx jsx */
import {
  jsx,
  css,
  SerializedStyles,
} from '@emotion/core';
import {
  Avatar,
  Layout,
  Menu,
} from 'antd';
import Router from 'next/router';

const { Header } = Layout;
const navHeight: number = 46;

interface PropsType {
  selectedKey: string;
}

export default function HeaderNav({ selectedKey }: PropsType): JSX.Element {

  const login: () => void = () => {
    Router.push('/login');
  };

  return (
    <Header
      className="header"
      style={styles.header}>
      <div css={logo}></div>
      <div css={avatar} onClick={login}>
        <Avatar icon="user" />
      </div>
      <Menu
        mode="horizontal"
        selectedKeys={[selectedKey]}
        style={styles.menu}
      >
        <Menu.Item key="stocker">Stocker</Menu.Item>
      </Menu>
    </Header>
  );
}

const logo: SerializedStyles = css`
  width: 80px;
  height: ${navHeight}px;
  margin: 0 14px 0 0;
  float: left;
  background-image: url("images/header.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const avatar: SerializedStyles = css`
  cursor: pointer;
  float: right;
`;

const styles: { [key: string]: CSSProperties } = {
  header: {
    height: navHeight,
    lineHeight: `${navHeight}px`,
    backgroundColor: '#fff',
    boxShadow: '0 1px 4px rgba(0,21,41,.08)',
    padding: '0 10px',
  },
  menu: {
    lineHeight: `${navHeight}px`,
    backgroundColor: '#fff',
  },
};

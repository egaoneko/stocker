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
  Menu,
} from 'antd';

const { Header } = Layout;
const navHeight: number = 45;

interface PropsType {
  selectedKey: string;
}

export default function HeaderNav({selectedKey}: PropsType): JSX.Element {
  return (
    <Header
      className="header"
      style={{ height: navHeight }}>
      <div css={logo}></div>
      <Menu
        theme="dark"
        mode="horizontal"
        selectedKeys={[selectedKey]}
        style={{ lineHeight: `${navHeight}px` }}
      >
        <Menu.Item key="stocker">Stocker</Menu.Item>
      </Menu>
    </Header>
  );
}

const logo: SerializedStyles = css`
  width: 80px;
  height: ${navHeight - 16}px;
  background: rgba(255, 255, 255, 0.2);
  margin: 8px 24px 8px 0;
  float: left;
`;
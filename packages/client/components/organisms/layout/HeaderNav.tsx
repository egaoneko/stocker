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
import Logo from '../../molecules/logo/Logo';
import {
  signIn,
  main
} from '../../../utils/router';

const { Header } = Layout;
const logoWidth: number = 118;
const navHeight: number = 42;
const logoImageUrl: string = 'images/header.png';

interface PropsType {
  selectedKey: string;
}

const HeaderNav: (props: PropsType) => JSX.Element = ({ selectedKey }: PropsType): JSX.Element => {
  return (
    <Header
      className="header"
      style={styles.header}>
      <Logo
        width={logoWidth}
        height={navHeight - 2}
        imageUrl={logoImageUrl}
        style={styles.logo}
        onClick={main}
      />
      <div css={avatar} onClick={signIn}>
        <Avatar icon="user"/>
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
};

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
  logo: {
    margin: '2px 10px 2px 0',
    float: 'left',
  },
  menu: {
    lineHeight: `${navHeight}px`,
    backgroundColor: '#fff',
  },
};

export default HeaderNav;

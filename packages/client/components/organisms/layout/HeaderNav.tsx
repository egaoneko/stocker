import React, {
  CSSProperties,
  useState
} from 'react';
/** @jsx jsx */
import {
  jsx,
  css,
  SerializedStyles,
} from '@emotion/core';
import {
  Dropdown,
  Layout,
  Menu,
} from 'antd';
import Logo from '../../molecules/layout/Logo';
import {
  signIn,
  main
} from '../../../utils/router';
import User from '@stocker/core/lib/domain/entities/account/User';
import Avatar from '../../molecules/layout/Avartar';

const { Header } = Layout;
const logoWidth: number = 118;
const navHeight: number = 42;
const logoImageUrl: string = 'images/header.png';

const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        3rd menu item
      </a>
    </Menu.Item>
  </Menu>
);

interface PropsType {
  selectedKey: string;
  user?: User | null;
}

const HeaderNav: (props: PropsType) => JSX.Element = ({ selectedKey, user }: PropsType): JSX.Element => {
  const [visible, setVisible] = useState<boolean>(false);

  function onClickAvatar(user?: User | null) {
    if (!user) {
      signIn();
    } else {
      setVisible(!visible);
    }
  }

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
      <Dropdown overlay={menu} trigger={['click']} visible={!!user && visible} placement="bottomRight">
        <div css={avatar} onClick={() => onClickAvatar(user)}>
          <Avatar user={user}/>
        </div>
      </Dropdown>

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

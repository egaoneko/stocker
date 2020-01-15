import React from 'react';
/** @jsx jsx */
import {
  jsx,
  css,
  SerializedStyles,
} from '@emotion/core';
import {
  Col,
  Layout,
  Menu,
  Row
} from 'antd';
import FullLayoutTemplate from '../layout/FullLayoutTemplate';
import CenterTemplate from '../layout/CenterTemplate';
import { useTranslation } from '../../../i18n';

const { Content, Sider } = Layout;

interface PropsType {
}

const HomeTemplate: (props: PropsType) => JSX.Element = (): JSX.Element => {
  const { t, i18n } = useTranslation('common');

  return (
    <FullLayoutTemplate>
      <Layout css={container}>
        <Sider width={200}
               css={sider}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
          >
            <Menu.Item key="1">option1</Menu.Item>
            <Menu.Item key="2">option2</Menu.Item>
            <Menu.Item key="3">option3</Menu.Item>
            <Menu.Item key="4">option4</Menu.Item>
          </Menu>
        </Sider>
        <Content css={content}>
          <Row>
            <Col span={24}>
              <p onClick={() => {
                (i18n as any).changeLanguage((i18n as any).language === 'kr' ? 'en' : 'kr');
              }}>{t('greet')}</p>
            </Col>
          </Row>
        </Content>
      </Layout>

    </FullLayoutTemplate>
  );
};

const container: SerializedStyles = css`
  width: 100%;
  height: 100%;
`;

const sider: SerializedStyles = css`
  height: 100%;
  background: #ffffff;
`;

const content: SerializedStyles = css`
`;

export default HomeTemplate;
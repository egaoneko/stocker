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
  Row,
} from 'antd';
import FullLayoutTemplate from '../layout/FullLayoutTemplate';
import { useTranslation } from '../../../i18n';
import StockItemListContainer from '../stock-item/StockItemListContainer';

const { Content } = Layout;

interface PropsType {
}

const HomeContainer: (props: PropsType) => JSX.Element = (): JSX.Element => {
  const { t, i18n } = useTranslation('common');

  return (
    <FullLayoutTemplate>
      <Layout css={container}>
        <Content css={content}>
          <Row>
            <Col span={24}>
              <p onClick={() => {
                (i18n as any).changeLanguage((i18n as any).language === 'kr' ? 'en' : 'kr');
              }}>{t('greet')}</p>
              <StockItemListContainer/>
            </Col>
          </Row>
        </Content>
      </Layout>

    </FullLayoutTemplate>
  );
};

const container: SerializedStyles = css`
  padding: 10px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const content: SerializedStyles = css`
  width: 100%;
  background: #fff;
`;

export default HomeContainer;
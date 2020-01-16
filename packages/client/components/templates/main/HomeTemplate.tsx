import React, { useState } from 'react';
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
  Table,
  Tag,
} from 'antd';
import FullLayoutTemplate from '../layout/FullLayoutTemplate';
import { useTranslation } from '../../../i18n';
import StockItem from '@stocker/core/lib/domain/entities/stock-item/StockItem';

const { Content } = Layout;

interface PropsType {
}

const HomeTemplate: (props: PropsType) => JSX.Element = (): JSX.Element => {
  const { t, i18n } = useTranslation('common');
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
  ];

  const [data, setData] = useState<StockItem[]>([
  ]);

  return (
    <FullLayoutTemplate>
      <Layout css={container}>
        <Content css={content}>
          <Row>
            <Col span={24}>
              <p onClick={() => {
                (i18n as any).changeLanguage((i18n as any).language === 'kr' ? 'en' : 'kr');
              }}>{t('greet')}</p>
              <Table columns={columns} dataSource={data}/>
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

export default HomeTemplate;
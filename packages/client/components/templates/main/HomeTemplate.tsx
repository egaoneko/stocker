import React, {
  useEffect,
  useState
} from 'react';
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
import { apply } from '@stocker/core/lib/utils/common';
import { CONTEXT } from '../../../constant';
import FindStockItemsBy from '@stocker/core/lib/domain/use-cases/stock-item/FindStockItemsBy';
import { async } from 'rxjs/internal/scheduler/async';
import { queue } from 'rxjs/internal/scheduler/queue';

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

  useEffect(() => {
    apply(CONTEXT.useCases.findStockItemsBy, (it: FindStockItemsBy) => it.options = {})
      .runOnce(async, queue)
      .subscribe((stockItems: StockItem[]) => {
        console.log(stockItems);
      });
  }, []);

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
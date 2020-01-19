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
import { apply } from '@stocker/core/lib/utils/common';
import { CONTEXT } from '../../../constant';
import FindStockItemsBy from '@stocker/core/lib/domain/use-cases/stock-item/FindStockItemsBy';
import { async } from 'rxjs/internal/scheduler/async';
import { queue } from 'rxjs/internal/scheduler/queue';
import CountStockItems from '@stocker/core/lib/domain/use-cases/stock-item/CountStockItems';
import PaginationTable from '../../organisms/table/PaginationTable';
import Market from '@stocker/core/lib/domain/entities/market/Market';
import { Options } from '@stocker/core/lib/interfaces/repository/options';
import StockItem from '@stocker/core/lib/domain/entities/stock-item/StockItem';

interface PropsType {
}

const StockItemListContainer: (props: PropsType) => JSX.Element = (): JSX.Element => {
  const columns = [
    {
      title: 'Code',
      dataIndex: 'code',
      key: 'code',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Market',
      dataIndex: 'market',
      key: 'market',
      render: (market: Market) => (market.name),
    },
    {
      title: 'GICS',
      dataIndex: 'gics',
      key: 'gics',
    },
    {
      title: 'WICS',
      dataIndex: 'wics',
      key: 'wics',
    },
    {
      title: 'State',
      dataIndex: 'state',
      key: 'state',
    },
  ];

  async function loadCount(options: Options): Promise<number> {
    return apply(
      CONTEXT.useCases.countStockItems,
      (it: CountStockItems) => it.options = options
    )
      .runOnce(async, queue)
      .toPromise();
  }

  async function loadPage(options: Options): Promise<StockItem[]> {
    return apply(
      CONTEXT.useCases.findStockItemsBy,
      (it: FindStockItemsBy) => it.options = options
    )
      .runOnce(async, queue)
      .toPromise();
  }

  return (
    <div css={container}>
      <PaginationTable
        columns={columns}
        rowKey={(stockItem: StockItem): string => stockItem.id as string}
        loadCount={loadCount}
        loadPage={loadPage}
      />
    </div>
  );
};

const container: SerializedStyles = css`
  padding: 10px 20px;
`;

export default StockItemListContainer;
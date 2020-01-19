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
import Table from './Table';
import { Options } from '@stocker/core/lib/interfaces/repository/options';

interface PropsType {
  columns: any[];
  rowKey: (record: any) => string | string;
  loadCount: (options: Options) => Promise<number>;
  loadPage: (options: Options) => Promise<any[]>;
}

const PaginationTable: (props: PropsType) => JSX.Element = (props: PropsType): JSX.Element => {
  const [items, setItems] = useState<any[]>([]);
  const [countLoading, setCountLoading] = useState<boolean>(false);
  const [listLoading, setListLoading] = useState<boolean>(false);
  const [total, setTotal] = useState<number>(0);
  const [current, setCurrent] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10);

  useEffect(() => {
    loadCount();
  }, []);

  useEffect(() => {
    loadPage(current, pageSize);
  }, [current]);

  async function loadCount(): Promise<void> {
    setCountLoading(true);
    const total: number = await props.loadCount({});
    setTotal(total);
    setCountLoading(false);
  }

  async function loadPage(page: number, pageSize: number): Promise<void> {
    setListLoading(true);
    const items: any[] = await props.loadPage({
      page,
      limit: pageSize,
    });
    setItems(items);
    setListLoading(false);
  }

  return (
    <div css={container}>
      <Table
        columns={props.columns}
        dataSource={items}
        loading={countLoading || listLoading}
        rowKey={props.rowKey}
        total={total}
        current={current}
        pageSize={pageSize}
        onPageChange={setCurrent}
        onShowPageSizeChange={setPageSize}
      />
    </div>
  );
};

const container: SerializedStyles = css`
  padding: 10px 20px;
`;

export default PaginationTable;
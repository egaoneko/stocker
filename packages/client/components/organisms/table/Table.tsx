import React, {
  useEffect,
  useState
} from 'react';
/** @jsx jsx */
import {
  jsx,
} from '@emotion/core';
import {
  Table as AntTable,
} from 'antd';

interface PropsType {
  columns: any[];
  dataSource: any[];
  loading: boolean;
  rowKey: (record: any) => string | string;
  total: number;
  current: number;
  pageSize: number;
  onPageChange: (page: number) => void;
  onShowPageSizeChange: (size: number) => void;
}

const Table: (props: PropsType) => JSX.Element = (props: PropsType): JSX.Element => {
  const {
    columns,
    dataSource,
    loading,
    rowKey,
    total,
    current,
    pageSize,
    onPageChange,
    onShowPageSizeChange,
  } = props;

  return (
    <AntTable
      columns={columns}
      dataSource={dataSource}
      loading={loading}
      rowKey={rowKey}
      pagination={{
        total,
        current,
        pageSize,
        showSizeChanger: true,
        pageSizeOptions: ['10', '20', '50'],
        onChange: onPageChange,
        onShowSizeChange: (current, size) => onShowPageSizeChange(size),
      }}
    />
  );
};

export default Table;
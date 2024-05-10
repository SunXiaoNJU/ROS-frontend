import type { ProColumns } from '@ant-design/pro-components';
import { EditableProTable, ProFormRadio } from '@ant-design/pro-components';
import Search from 'antd/es/input/Search';
import { SearchProps } from 'antd/lib/input';
import React, { useState } from 'react';

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

type DataSourceType = {
  id: React.Key;
  title?: string;
  readonly?: string;
  decs?: string;
  state?: string;
  created_at?: number;
  update_at?: number;
  children?: DataSourceType[];
};

const onSearch: SearchProps['onSearch'] = (value, _e, info) =>
  console.log(info?.source, value);

const defaultData: DataSourceType[] = [
  {
    id: 624748504,
    title: 'ROS机器⼈编程',
    readonly: 'ebook',
    created_at: 1715486176000,
    update_at: 1715486176000,
  },
  {
    id: 624691229,
    title: 'ROS⼊⻔教程',
    readonly: 'WhitePaper',
    created_at: 1715596176000,
    update_at: 1715596176000,
  },
  {
    id: 624691229,
    title: 'ROS机械臂SLAM研究',
    readonly: 'paper',
    created_at: 1715696176000,
    update_at: 1715696176000,
  },
  {
    id: 624691229,
    title: '智能机器⼈在线仿真研究',
    readonly: 'manual',
    created_at: 1715726176000,
    update_at: 1715726176000,
  },
];

export default () => {
  const [editableKeys, setEditableRowKeys] = useState<React.Key[]>([]);
  const [dataSource, setDataSource] = useState<readonly DataSourceType[]>([]);
  const [position, setPosition] = useState<'top' | 'bottom' | 'hidden'>(
    'bottom',
  );

  const columns: ProColumns<DataSourceType>[] = [
    {
      title: '资料名称',
      dataIndex: 'title',
      formItemProps: (form, { rowIndex }) => {
        return {
          rules:
            rowIndex > 1 ? [{ required: true, message: '此项为必填项' }] : [],
        };
      },
      // 第一行不允许编辑
      editable: (text, record, index) => {
        return index !== 0;
      },
      width: '15%',
    },
    {
      title: '创建日期',
      dataIndex: 'created_at',
      valueType: 'date',
    },
    {
      title: '资料标签',
      dataIndex: 'readonly',
      tooltip: '包括ebook、paper、manual、WhitePaper四种',
      valueEnum: {
        ebook: 'ebook',
        paper: 'paper',
        manual: 'manual',
        WhitePaper: 'WhitePaper',
      },
      // readonly: true,
      width: '15%',
    },
    {
      title: '操作',
      valueType: 'option',
      width: 200,
      render: (text, record, _, action) => [
        <a
          key="editable"
          onClick={() => {
            action?.startEditable?.(record.id);
          }}
        >
          在线预览
        </a>,
        <a
          key="delete"
          onClick={() => {
            setDataSource(dataSource.filter((item) => item.id !== record.id));
          }}
        >
          删除
        </a>,
      ],
    },
  ];

  return (
    <div>
      <Search
        placeholder="搜索框"
        onSearch={onSearch}
        enterButton
        width="10px"
      />
      <EditableProTable<DataSourceType>
        rowKey="id"
        headerTitle="资料管理"
        maxLength={5}
        scroll={{
          x: 960,
        }}
        recordCreatorProps={
          position !== 'hidden'
            ? {
                position: position as 'top',
                record: () => ({ id: (Math.random() * 1000000).toFixed(0) }),
              }
            : false
        }
        loading={false}
        toolBarRender={() => [
          <ProFormRadio.Group
            key="render"
            fieldProps={{
              value: position,
              onChange: (e) => setPosition(e.target.value),
            }}
            options={[
              {
                label: '添加到顶部',
                value: 'top',
              },
              {
                label: '添加到底部',
                value: 'bottom',
              },
              {
                label: '隐藏',
                value: 'hidden',
              },
            ]}
          />,
        ]}
        columns={columns}
        request={async () => ({
          data: defaultData,
          total: 3,
          success: true,
        })}
        value={dataSource}
        onChange={setDataSource}
        editable={{
          type: 'multiple',
          editableKeys,
          onSave: async (rowKey, data, row) => {
            console.log(rowKey, data, row);
            await waitTime(2000);
          },
          onChange: setEditableRowKeys,
        }}
      />
    </div>
  );
};

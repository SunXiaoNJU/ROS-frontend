import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import { ProList } from '@ant-design/pro-components';
import { Tag } from 'antd';
import React from 'react';

interface Props {
  title: string;
  content: string;
}

const MyProList: React.FC<Props> = (props: Props) => {
  const IconText = ({ icon, text }: { icon: any; text: string }) => (
    <span>
      {React.createElement(icon, { style: { marginInlineEnd: 8 } })}
      {text}
    </span>
  );

  const dataSource = [
    {
      title: props.title,
    },
  ];

  return (
    <ProList
      style={{ marginBottom: '12px' }}
      itemLayout="vertical"
      rowKey="id"
      dataSource={dataSource}
      metas={{
        title: {},
        description: {
          render: () => (
            <>
              <Tag>ROS</Tag>
              <Tag>机器人</Tag>
              <Tag>webviz</Tag>
            </>
          ),
        },
        actions: {
          render: () => [
            <IconText
              icon={StarOutlined}
              text="156"
              key="list-vertical-star-o"
            />,
            <IconText
              icon={LikeOutlined}
              text="520"
              key="list-vertical-like-o"
            />,
            <IconText
              icon={MessageOutlined}
              text="6"
              key="list-vertical-message"
            />,
          ],
        },
        extra: {
          render: () => <img width={200} alt="logo" src="/ros.svg" />,
        },
        content: {
          render: () => {
            return <div>{props.content}</div>;
          },
        },
      }}
    />
  );
};

export default MyProList;

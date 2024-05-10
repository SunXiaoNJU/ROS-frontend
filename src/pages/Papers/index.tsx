import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import { PageContainer, ProList } from '@ant-design/pro-components';
import { Editor } from '@tinymce/tinymce-react';
import { Button, Tag } from 'antd';
import Search from 'antd/es/input/Search';
import React from 'react';

const Papers: React.FC = () => {
  const IconText = ({ icon, text }: { icon: any; text: string }) => (
    <span>
      {React.createElement(icon, { style: { marginInlineEnd: 8 } })}
      {text}
    </span>
  );

  const ros = <div style={{ color: 'red', display: 'inline-block' }}>ROS</div>;

  const dataSource = [
    {
      title: 'ROS智能仿真研究实战',
    },
  ];

  return (
    <PageContainer ghost>
      <ProList<{ title: string }>
        toolBarRender={() => {
          return [
            <Search key="4" placeholder="input search text" enterButton />,
          ];
        }}
        itemLayout="vertical"
        rowKey="id"
        headerTitle="文章汇总"
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
            render: () => <img width={272} alt="logo" src="/ros.svg" />,
          },
          content: {
            render: () => {
              return (
                <div>
                  在实现⾃主探索之前，先介绍基于 {ros}{' '}
                  Navigation的机器⼈导航框架，{ros}{' '}
                  Navigation是后续学习更⾼级的导航算法的基础。在仿真中，读者将跟随讲解⼀步⼀
                  步配置机器⼈导航环境，包括传感器的设置，局部避障算法的配置等等，最终将实现
                  在仿真环境中移动机器⼈的导航与避障。
                  1,机器⼈仿真环境建⽴与Navigation栈配置
                  1.1,机器⼈Gazebo环境搭建
                  在已经安装了Gazebo的ubuntu18.04系统上，下载⽤于turtlebot3机器⼈仿真的软件
                  包。
                </div>
              );
            },
          },
        }}
      />

      <Editor
        apiKey="p9alq9d11jptw4zdda4v248my0wtz2q7fnr4y2kuof18deud"
        init={{
          plugins:
            'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate ai mentions tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss markdown',
          toolbar:
            'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
          tinycomments_mode: 'embedded',
          tinycomments_author: 'Author name',
          mergetags_list: [
            { value: 'First.Name', title: 'First Name' },
            { value: 'Email', title: 'Email' },
          ],
          ai_request: (request: any, respondWith: any) =>
            respondWith.string(() =>
              Promise.reject('See docs to implement AI Assistant'),
            ),
        }}
        initialValue="请编辑你的文章"
      />
      {/* <Image src="/文章管理.png"></Image> */}
      <Button
        type="dashed"
        style={{ marginRight: '12px', marginLeft: '900px' }}
      >
        保存草稿
      </Button>
      <Button type="primary">发布文章</Button>
    </PageContainer>
  );
};

export default Papers;

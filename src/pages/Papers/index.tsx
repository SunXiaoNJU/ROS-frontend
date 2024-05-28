import MyProList from '@/components/MyProList';
import { PageContainer } from '@ant-design/pro-components';
import { Editor } from '@tinymce/tinymce-react';
import { Button, Card, FloatButton, Space, message } from 'antd';
import Search from 'antd/es/input/Search';
import React, { useState } from 'react';

const Papers: React.FC = () => {
  const [isshow, setIsshow] = useState(false);
  const [isPersonal, setIsPersonal] = useState(false);
  const dataSource = [
    {
      title: 'ROS智能仿真研究实战',
    },
  ];

  const onSearch = () => {
    message.success('已找到相关文章');
    setIsshow(true);
  };

  return (
    <PageContainer ghost>
      <Search
        placeholder="ROS"
        onSearch={onSearch}
        enterButton
        style={{ marginBottom: '12px' }}
      ></Search>
      {isshow ? (
        <MyProList
          title={dataSource[0].title}
          content="在实现⾃主探索之前，先介绍基于 ROS
                  Navigation的机器⼈导航框架，ROS
                  Navigation是后续学习更⾼级的导航算法的基础。在仿真中，读者将跟随讲解⼀步⼀步配置机器⼈导航环境，包括传感器的设置，局部避障算法的配置等等，最终将实现在仿真环境中移动机器⼈的导航与避障。
                  1.机器⼈仿真环境建⽴与Navigation栈配置
                  1.1.机器⼈Gazebo环境搭建
                  在已经安装了Gazebo的ubuntu18.04系统上，下载⽤于turtlebot3机器⼈仿真的软件包。"
        ></MyProList>
      ) : (
        <></>
      )}
      <a href="http://localhost:5173/" target="_blank" rel="noreferrer">
        文章编辑
      </a>
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
      <Button type="dashed" style={{ float: 'right', marginLeft: '12px' }}>
        保存草稿
      </Button>
      <Button type="primary" style={{ float: 'right' }}>
        发布文章
      </Button>
      {isPersonal ? (
        <Space direction="horizontal" size={32} style={{ marginTop: '12px' }}>
          <Card
            title="收藏：156"
            bordered={false}
            style={{ width: 300, marginTop: '12px' }}
          >
            <p>用户9sdfjs93df</p>
            <p>ROS大神</p>
            <p>Ohhhhh</p>
          </Card>
          <Card
            title="点赞数：520"
            bordered={false}
            style={{ width: 300, marginTop: '12px' }}
          >
            <p>beat</p>
            <p>用户whatever_asdfdsf</p>
            <p>z_z</p>
          </Card>
          <Card
            title="评论数：6"
            bordered={false}
            style={{ width: 300, marginTop: '12px' }}
          >
            <p>z_z</p>
            <p>用户89879isdfn</p>
            <p>o_O</p>
          </Card>
          <Card
            title="转发数：37"
            bordered={false}
            style={{ width: 300, marginTop: '12px' }}
          >
            <p>ROS大神</p>
            <p>用户whatever_asdfdsf</p>
            <p>o_O</p>
          </Card>
        </Space>
      ) : (
        <></>
      )}

      <FloatButton
        tooltip={<div>个人信息</div>}
        onClick={() => {
          const isPersonalNow = isPersonal;
          setIsPersonal(!isPersonalNow);
        }}
      />
    </PageContainer>
  );
};

export default Papers;

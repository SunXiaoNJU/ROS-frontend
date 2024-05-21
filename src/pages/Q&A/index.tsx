import MyProList from '@/components/MyProList';
import { PageContainer, ProList } from '@ant-design/pro-components';
import { Space, Tag } from 'antd';
import Search from 'antd/es/input/Search';
import React, { useState } from 'react';

const QA: React.FC = () => {
  const contentData = [
    {
      id: '1',
      name: 'Slayers',
      image:
        'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
      desc: 'C++不⽤你全部都会，ROS找个建图导航的开源包，⾃⼰⽤python写⼀个拍照的node就可以了。',
    },
    {
      id: '2',
      name: '玛卡巴卡',
      image:
        'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
      desc: '感谢，⼀直都没来看哈哈，项⽬已经结束了，⽤Python玩了⼀把ROS，ROS的各种基本概念算是差不多了解了⼀些，⽤的GPS导航，不过最后坐标转换还有些问题，时间不太够',
    },
    {
      id: '3',
      name: 'nameless',
      image:
        'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
      desc: '会写节点，这些挺多都会，但是还是不懂怎么开发，导师买了套件，⽤的都是别⼈的，理解不下去咋办',
    },
    {
      id: '4',
      name: 'Slayers',
      image:
        'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
      desc: '机器⼈开发，如果不是深⼊钻研算法的优化，会拼积⽊式的开发就能解决⼤多数问题。⼀些算法⽐如图优化SLAM，如果单单是增加⾃⼰的feature某种程度也可以采⽤拼积⽊的思想去改写。如果再深⼊研究就涉及到数学基础，那就要厚积薄发了',
    },
    {
      id: '5',
      name: 'nameless',
      image:
        'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
      desc: '感谢！',
    },
  ];

  type DataItem = (typeof contentData)[number];
  const [dataSource, setDataSource] = useState<DataItem[]>(contentData);

  return (
    <PageContainer ghost>
      <Search key="4" placeholder="ROS" enterButton />
      <MyProList
        title="作为⼀名ROS零基础的本科⽣，如何学习ROS？"
        content="1.C++扎实的话Ros上⼿很快。胡春旭有本书叫Ros开发实践，不管是移动机器⼈还是机械臂都能⽤上。B站有一门软件所的课，入门可以看⼀下。2.这个问题，我不清楚如何回答。如果是⽆⼈驾驶汽⻋⽅向推荐autoware的课程。首先，为何⼀定需要学习ROS机器⼈？否则⼊⻔了也迷茫啊，ROS是⼯具，⾃⼰想好做啥才有⽅向。机器⼈和⽆⼈驾驶这两个⽅向对编程要求应该都挺⾼的。3.现在学的话不建议ROS⼀代了，还有3年就停⽌维护了，虽然⼀代资料很多，⽹上系统的教程也不少，但是如果现在0基础⼊⻔的话真的不建议了。直接学ROS2吧，本科⽣时间其实也挺多的，学ROS2绝对是最好的选择，以后找工作做项⽬也会有很大优势！"
      ></MyProList>
      <MyProList
        title="对Gazebo一窍不通，有没有大神教教，球球了QvQ"
        content="Gazebo 是一个用于仿真机器人的开源 3D 模拟器，它是 ROS（机器人操作系统）的一部分。使用 Gazebo，你可以在虚拟环境中模拟机器人的行为，进行测试和验证，而无需实际的硬件设备。在开始之前，建议你先了解一些 Gazebo 的基础知识，比如 Gazebo 的术语、界面等。你可以查看官方文档或者一些在线教程。使用 Gazebo，你可以创建一个虚拟环境来模拟机器人的行为。你可以在 Gazebo 中添加地图、机器人模型、传感器等，以模拟真实世界中的场景。Gazebo 是一个非常强大的工具，你可以在很多方面进行深入学习。你可以学习如何使用 Gazebo 中的传感器、如何进行物理仿真等等。"
      ></MyProList>
      <MyProList
        title="webviz是什么？应该怎么用？"
        content="Webviz 是一个用于可视化 ROS 数据的工具，它可以在 Web 浏览器中实时显示 ROS 主题、消息和传感器数据，以帮助用户理解和调试机器人系统。Webviz 允许用户在浏览器中创建可交互的图表、图像、3D 视图等，以便于对 ROS 数据进行分析和可视化。"
      ></MyProList>

      <ProList<DataItem>
        style={{ marginTop: '12px' }}
        rowKey="id"
        headerTitle="评论区"
        dataSource={dataSource}
        showActions="hover"
        editable={{
          onSave: async (key, record, originRow) => {
            console.log(key, record, originRow);
            return true;
          },
        }}
        onDataSourceChange={setDataSource}
        metas={{
          title: {
            dataIndex: 'name',
          },
          avatar: {
            dataIndex: 'image',
            editable: false,
          },
          description: {
            dataIndex: 'desc',
          },
          subTitle: {
            render: () => {
              return (
                <Space size={0}>
                  <Tag color="blue">ROS</Tag>
                  <Tag color="#5BD8A6">webviz</Tag>
                </Space>
              );
            },
          },
          actions: {},
        }}
      />
    </PageContainer>
  );
};

export default QA;

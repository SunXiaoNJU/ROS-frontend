import { PageContainer } from '@ant-design/pro-components';
import { request } from '@umijs/max';
import { Button, Input, Space, message, notification } from 'antd';
import { useState } from 'react';
import styles from './index.less';

type NotificationType = 'success' | 'info' | 'warning' | 'error';

const Vision: React.FC = () => {
  const [launchCnt, setLaunchCnt] = useState(
    '输入待执行的launch文件和它所在的功能包名，空格分隔，例如：racecar.launch gazebo',
  );
  const [pyCnt, setPyCnt] = useState(
    '等待webviz加载完毕，输入导航脚本和它所在的功能包名，空格分隔，例如：path.py gazebo',
  );

  const [api, contextHolder] = notification.useNotification();
  const openNotificationWithIcon = (type: NotificationType) => {
    api[type]({
      message: '使用引导',
      description:
        '先在【文件上传】中上传文件！然后按照引导上传launch相关内容，等待可视化窗口加载完毕，上传导航相关内容。全部使用完毕，点击【结束进程】即可退出。',
    });
  };

  const submitLaunchRequest = async () => {
    const launchPattern = /^[a-zA-Z].*\.launch\s.*$/;
    if (!launchPattern.test(launchCnt)) {
      message.error('格式为xx.launch xx，请修改');
      return false;
    }
    const res = request(
      'http://116.62.210.218:9090/try/getnamelaunch', // p1
      {
        params: {
          p1: launchCnt,
          id: sessionStorage.getItem('loginId'),
        },
      },
    );
    try {
      message.success('上传成功！请等待后续反馈~');
      const data = await res;
      message.info('反馈：' + data.data);
    } catch (error) {
      message.error('' + error);
    } finally {
      message.success('可视化窗口加载完成！');
    }
  };

  const submitPyRequest = async () => {
    const pyPattern = /^[a-zA-Z].*\.py\s.*$/;
    if (!pyPattern.test(pyCnt)) {
      message.error('格式为xx.py xx，请修改');
      return false;
    }
    const res = request(
      'http://116.62.210.218:9090/try/getnamepy', // p2
      {
        params: {
          p2: pyCnt,
          id: sessionStorage.getItem('loginId'),
        },
      },
    );
    message.success('上传成功！请等待后续反馈~');
    if (await res) {
      const data = await res;
      message.info('反馈：' + data.data);
    }
  };

  const killProgressRequest = () => {
    request('http://116.62.210.218/api/remote/complete-task', {
      params: {
        content: 'kill progress',
        id: sessionStorage.getItem('loginId'),
      },
    });
    sessionStorage.clear();
    location.reload();
  };

  return (
    <PageContainer ghost>
      {contextHolder}
      <Space className={styles.msg}>
        <Button
          type="primary"
          onClick={() => openNotificationWithIcon('info')}
          className={styles.tipButton}
        >
          使用引导
        </Button>
      </Space>

      <Space.Compact style={{ width: '60%' }} className={styles.input}>
        <Input
          value={launchCnt}
          onChange={(e) => {
            setLaunchCnt(e.target.value);
          }}
        />
        <Button type="primary" onClick={submitLaunchRequest}>
          上传
        </Button>
      </Space.Compact>

      <iframe
        src="http://116.62.210.218:8080/?rosbridge-websocket-url=ws://121.41.128.141:9090"
        className={styles.webviz}
      ></iframe>

      <Space.Compact style={{ width: '66%' }} className={styles.input}>
        <Input
          value={pyCnt}
          onChange={(e) => {
            setPyCnt(e.target.value);
          }}
        />
        <Button type="primary" onClick={submitPyRequest}>
          上传
        </Button>
      </Space.Compact>
      <Button
        type="primary"
        onClick={killProgressRequest}
        style={{ marginLeft: '15em' }}
      >
        结束进程
      </Button>
    </PageContainer>
  );
};

export default Vision;

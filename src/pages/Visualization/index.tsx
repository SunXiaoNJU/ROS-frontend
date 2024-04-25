import { PageContainer } from '@ant-design/pro-components';
import { request } from '@umijs/max';
import { Button, Input, Space, message, notification } from 'antd';
import { useState } from 'react';
import styles from './index.less';

type NotificationType = 'success' | 'info' | 'warning' | 'error';

const Vision: React.FC = () => {
  const [launchCnt, setLaunchCnt] = useState('');

  const [api, contextHolder] = notification.useNotification();
  const openNotificationWithIcon = (type: NotificationType) => {
    api[type]({
      message: '上传launch文件名',
      description:
        '首先记得在【文件上传】中上传文件！然后再上传文件中launch的文件名',
    });
  };

  const submitLaunchRequest = async () => {
    const res = request(
      'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188', // 后端接口
      {
        params: {
          launch: launchCnt,
        },
      },
    );
    if (await res) {
      message.success('上传成功！');
    }
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
          使用提醒
        </Button>
      </Space>
      <Space.Compact style={{ width: '19%' }} className={styles.input}>
        <Input
          placeholder="上传文件中launch的名称"
          suffix=".launch"
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
        width="100%"
        height="750em"
      ></iframe>
    </PageContainer>
  );
};

export default Vision;

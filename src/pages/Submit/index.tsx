import { InboxOutlined } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';
import { request } from '@umijs/max';
import type { UploadProps } from 'antd';
import { Button, Card, Space, Upload, message, notification } from 'antd';
import { useState } from 'react';
import styles from './index.less';

type NotificationType = 'success' | 'info' | 'warning' | 'error';

const { Dragger } = Upload;

const Submit: React.FC = () => {
  const [api, contextHolder] = notification.useNotification();
  const [isShow, setIsShow] = useState(false);
  const [waitNum, setWaitNum] = useState(0);
  const [waitTime, setWaitTime] = useState(0);

  const openNotificationWithIcon = (type: NotificationType) => {
    api[type]({
      message: '上传文件格式要求',
      description:
        '文件名请以学号命名。不支持上传文件夹，须压缩成.rar或.zip格式进行上传。',
    });
  };

  const props: UploadProps = {
    name: 'file',
    multiple: true,
    action: 'https://run.mocky.io/v3/dec3a9db-1cbe-4677-947d-048ac4f759d9', // 后端接口url
    beforeUpload: (fcFile) => {
      const fileName = fcFile.name.split('.')[0];
      // 检查拦截文件名不符合要求的上传文件
      if (fileName !== sessionStorage.getItem('loginId')) {
        message.error(`File name: ${fileName} is forbidden.`);
        return false;
      }
    },
    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
        // 设一个改变等待时间显示的state，文件上传成功后显示等待时间。
        setIsShow(true);
        // 向后端获取实时等待时间，并setInterval(updateWaitingInfo, 30000);
        setInterval(async () => {
          const res = request(
            'https://run.mocky.io/v3/dec3a9db-1cbe-4677-947d-048ac4f759d9',
            // '/api/waitingInfo'
          );
          if (await res) {
            setWaitNum(0);
            setWaitTime(0);
          } else {
            message.error('获取等待信息失败');
          }
        }, 30000);
        // 等待人数为 0 时发送下方消息。
        if (waitNum === 0) {
          message.info('前面暂无等待同学，请移步【ROS可视化】板块');
        }
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
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
          上传须知
        </Button>
      </Space>
      <Dragger {...props}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">
          Click or drag file to this area to upload
        </p>
        <p className="ant-upload-hint">
          Support for a single or bulk upload. Strictly prohibited from
          uploading banned files.
        </p>
      </Dragger>
      {isShow ? (
        <Space direction="horizontal" size={32} style={{ marginTop: '20px' }}>
          <Card title="等待学生人数" style={{ width: 300 }}>
            <p style={{ color: 'red' }}>{waitNum} 人</p>
          </Card>
          <Card title="预计等待时间" style={{ width: 300 }}>
            <p style={{ color: 'red' }}>{waitTime} 分钟</p>
          </Card>
        </Space>
      ) : (
        <></>
      )}
    </PageContainer>
  );
};

export default Submit;

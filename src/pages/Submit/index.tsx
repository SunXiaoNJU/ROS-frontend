import { InboxOutlined } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';
import { Link } from '@umijs/max';
import type { UploadProps } from 'antd';
import { Alert, Button, Space, Upload, message, notification } from 'antd';
import styles from './index.less';

type NotificationType = 'success' | 'info' | 'warning' | 'error';

const { Dragger } = Upload;

const Submit: React.FC = () => {
  const [api, contextHolder] = notification.useNotification();

  const openNotificationWithIcon = (type: NotificationType) => {
    api[type]({
      message: '上传文件格式要求',
      description: '不支持上传文件夹，须压缩成.rar或.zip格式进行上传',
    });
  };

  const props: UploadProps = {
    name: 'file',
    multiple: true,
    action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188', // 后端接口url
    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
  };

  const loginType = sessionStorage.getItem('accessId') !== '0';

  return loginType ? (
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
      <Dragger {...props} className={styles.dragger}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">
          Click or drag file to this area to upload
        </p>
        <p className="ant-upload-hint">
          Support for a single or bulk upload. Strictly prohibited from
          uploading company data or other banned files.
        </p>
      </Dragger>
    </PageContainer>
  ) : (
    <Space>
      <Alert
        message="Warning"
        description="还未登录，请点击【跳转登录】登录账号"
        type="warning"
        showIcon
        closable
      />
      <Link to="/home">跳转登录</Link>
    </Space>
  );
};

export default Submit;

import { InboxOutlined } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';
import type { UploadProps } from 'antd';
import { Button, Space, Upload, message, notification } from 'antd';
import styles from './index.less';

type NotificationType = 'success' | 'info' | 'warning' | 'error';

const { Dragger } = Upload;

const Submit: React.FC = () => {
  const [api, contextHolder] = notification.useNotification();

  const openNotificationWithIcon = (type: NotificationType) => {
    api[type]({
      message: '上传文件格式要求',
      description: '上传文件须为.zip或.rar格式的压缩文件',
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

  return (
    <PageContainer ghost>
      {contextHolder}
      <Space>
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
  );
};

export default Submit;

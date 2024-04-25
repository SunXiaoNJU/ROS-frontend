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
      description:
        '文件名请以学号命名。不支持上传文件夹，须压缩成.rar或.zip格式进行上传。',
    });
  };

  const props: UploadProps = {
    name: 'file',
    multiple: true,
    action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188', // 后端接口url
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
        message.info('请移步【ROS可视化】板块');
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
    </PageContainer>
  );
};

export default Submit;

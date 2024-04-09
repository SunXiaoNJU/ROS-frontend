import { PageContainer } from '@ant-design/pro-components';
import { Link } from '@umijs/max';
import { Alert, Space } from 'antd';

const Vision: React.FC = () => {
  const loginType = sessionStorage.getItem('accessId') !== '';

  return loginType ? (
    <PageContainer ghost>
      <iframe src="https://webviz.io/app/" width="100%" height="800em"></iframe>
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
      <Link to="/home" prefetch>
        跳转登录
      </Link>
    </Space>
  );
};

export default Vision;

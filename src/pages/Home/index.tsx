import Guide from '@/components/Guide';
import { PageContainer } from '@ant-design/pro-components';
import { Button } from 'antd';
import styles from './index.less';

const HomePage: React.FC = () => {
  const name = 'ROS 考试系统';
  return (
    <PageContainer ghost>
      <div className={styles.loginBlock}>
        <Button className={styles.button}>登录</Button>
        <Button className={styles.button}>注册</Button>
      </div>
      <div className={styles.container}>
        <Guide name={name} />
      </div>
    </PageContainer>
  );
};

export default HomePage;

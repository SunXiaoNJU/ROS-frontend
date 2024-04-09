import Guide from '@/components/Guide';
import Login from '@/components/Login';
import { DEFAULT_NAME } from '@/constants';
import { PageContainer } from '@ant-design/pro-components';
import { Button, Image } from 'antd';
import { useState } from 'react';
import styles from './index.less';

sessionStorage.setItem('accessId', '');

const HomePage: React.FC = () => {
  const name = DEFAULT_NAME;
  const [loginId, setLoginId] = useState('');

  const loginType = sessionStorage.getItem('accessId') !== '';

  const pageSide = (
    <div className={styles.img}>
      <Image src="/ros.svg" style={{ width: '600px' }}></Image>
    </div>
  );

  const getLoginId = (id: string) => setLoginId(id);

  return (
    <PageContainer ghost>
      {(loginType || loginId) && (
        <div className={styles.loginBlock}>
          <Button
            className={styles.loginButton}
            onClick={() => location.reload()}
          >
            退出登录
          </Button>
        </div>
      )}
      <div>
        <Guide name={name} id={sessionStorage.getItem('accessId') + ''} />
      </div>
      {loginType || loginId ? pageSide : <Login getLoginId={getLoginId} />}
    </PageContainer>
  );
};

export default HomePage;

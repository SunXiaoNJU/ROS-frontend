import Guide from '@/components/Guide';
import Login from '@/components/Login';
import { DEFAULT_NAME } from '@/constants';
import { PageContainer } from '@ant-design/pro-components';
import { Button, Image } from 'antd';
import { useState } from 'react';
import styles from './index.less';

sessionStorage.setItem('access', 'false');

const HomePage: React.FC = () => {
  const name = DEFAULT_NAME;
  const [ishide, setIshide] = useState(true);
  const [loginId, setLoginId] = useState('');

  const pageSide = (
    <div className={styles.img}>
      <Image src="/ros.svg" style={{ width: '600px' }}></Image>
    </div>
  );

  const getLoginId = (id: string) => setLoginId(id);

  return (
    <PageContainer ghost>
      <div className={styles.loginBlock}>
        <Button className={styles.loginButton} onClick={() => setIshide(false)}>
          登录/注册
        </Button>
      </div>
      <div>
        <Guide name={name} id={loginId} />
      </div>
      {ishide ? pageSide : <Login getLoginId={getLoginId} />}
    </PageContainer>
  );
};

export default HomePage;

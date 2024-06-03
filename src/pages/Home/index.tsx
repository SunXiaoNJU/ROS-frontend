import Guide from '@/components/Guide';
import Login from '@/components/Login';
import { DEFAULT_NAME } from '@/constants';
import { PageContainer } from '@ant-design/pro-components';
import { request } from '@umijs/max';
import { Button, Image } from 'antd';
import { useState } from 'react';
import styles from './index.less';

sessionStorage.clear(); // 先清空SessionStorage再设置value
sessionStorage.setItem('accessId', '');

const HomePage: React.FC = () => {
  const name = DEFAULT_NAME;
  const [loginId, setLoginId] = useState('');

  const loginType = sessionStorage.getItem('loginId') !== null;

  const pageSide = (
    <div className={styles.img}>
      <Image src="/ros.svg" style={{ width: '600px' }}></Image>
    </div>
  );

  const getLoginId = (id: string) => setLoginId(id);

  const loginOut = () => {
    request(
      'http://116.62.210.218:9090/try/logout', // 后端接口
      {
        params: {
          message: '用户退出登录',
          id: sessionStorage.getItem('loginId'),
        },
      },
    );
    sessionStorage.clear();
    location.reload();
  };

  return (
    <PageContainer ghost>
      {(loginType || loginId) && (
        <>
          <div className={styles.loginBlock}>
            <Button className={styles.loginButton} onClick={loginOut}>
              退出登录
            </Button>
          </div>
          <div>
            <Guide name={name} id={sessionStorage.getItem('loginId') + ''} />
          </div>
        </>
      )}

      {loginType || loginId ? pageSide : <Login getLoginId={getLoginId} />}
    </PageContainer>
  );
};

export default HomePage;

import Guide from '@/components/Guide';
import Login from '@/components/Login';
import { DEFAULT_NAME } from '@/constants';
import { PageContainer } from '@ant-design/pro-components';
import { request } from '@umijs/max';
import { Button, Image } from 'antd';
import { useEffect, useState } from 'react';
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

  useEffect(() => {
    if (sessionStorage.getItem('accessId') === '') {
      // 告知后端结束进程，如果存在进程就杀，不存在就无视
      request(
        'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188', // 后端接口
        {
          params: {
            message: '用户退出登录',
          },
        },
      );
      console.log('hhh', loginId);
    }
  }, []);

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

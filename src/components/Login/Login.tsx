import { request } from '@umijs/max';
import { Button, Input, message } from 'antd';
import { useState } from 'react';
import { Md5 } from 'ts-md5';
import styles from './Login.less';

interface Props {
  getLoginId: (value: string) => void;
}

const Login: React.FC<Props> = ({ getLoginId }) => {
  const [isgx, setIsgx] = useState(false);
  const [istxr, setIstxr] = useState(false);
  const [istxl, setIstxl] = useState(false);
  const [isz, setIsz] = useState(false);
  const [ishidden, setIshidden] = useState(false);

  const [signupId, setSignupId] = useState('');
  const [signupPhone, setSignupPhone] = useState('');
  const [signupPwd, setSignupPwd] = useState('');
  const [signinId, setSigninId] = useState('');
  const [signinPwd, setSigninPwd] = useState('');

  const signupRequest = async () => {
    const encryptedPwd = Md5.hashStr('ROS' + signupPwd);
    const res = request(
      'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188', // /user/register
      {
        params: {
          id: signupId,
          pwd: encryptedPwd,
          phone: signupPhone,
        },
      },
    );
    if (await res) {
      message.success('注册成功！');
    }
  };

  const signinRequest = async () => {
    const encryptedPwd = Md5.hashStr('ROS' + signinPwd);
    const res = request(
      'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188', // /user/signin
      {
        params: {
          id: signinId,
          pwd: encryptedPwd,
        },
      },
    );
    if (await res) {
      getLoginId(signinId);
      sessionStorage.setItem('accessId', `${signinId}`);
      sessionStorage.setItem('loginId', `${signinId}`);
      message.success('登录成功！');
    }
  };

  const changeForm = () => {
    setIsgx(true);
    setTimeout(() => {
      setIsgx(false);
    }, 1500);
    setIstxr(!istxr);
    setIstxl(!istxl);
    setIsz(!isz);
    setIshidden(!ishidden);
  };

  return (
    <div className={styles.box}>
      <div className={styles.shell}>
        <div
          className={`${styles.container} ${styles.aContainer} ${istxl ? styles.isTxl : ''}`}
        >
          <form className={styles.form}>
            <h2 className={styles.title}>注册账号</h2>
            <span className={styles.formSpan}>请凭学号注册账号</span>
            <Input
              type="text"
              className={styles.formInput}
              placeholder="学号"
              value={signupId}
              onChange={(e: any) => setSignupId(e.target.value)}
            />
            <Input
              type="text"
              className={styles.formInput}
              placeholder="电话"
              value={signupPhone}
              onChange={(e: any) => setSignupPhone(e.target.value)}
            />
            <Input
              type="password"
              className={styles.formInput}
              placeholder="密码"
              value={signupPwd}
              onChange={(e: any) => setSignupPwd(e.target.value)}
            />
            <Button
              className={`${styles.button} ${styles.submit}`}
              onClick={signupRequest}
            >
              SIGN UP
            </Button>
          </form>
        </div>

        <div
          className={`${styles.container} ${styles.bContainer} ${istxl ? styles.isTxl : ''} ${isz ? styles.isZ : ''}`}
        >
          <form className={styles.form}>
            <h2 className={styles.title}>登入账号</h2>
            <span className={styles.formSpan}>请凭学号登录账号</span>
            <Input
              type="text"
              className={styles.formInput}
              placeholder="学号"
              value={signinId}
              onChange={(e: any) => setSigninId(e.target.value)}
            />
            <Input
              type="password"
              className={styles.formInput}
              placeholder="密码"
              value={signinPwd}
              onChange={(e: any) => setSigninPwd(e.target.value)}
            />
            <i className={styles.formLink}>忘记密码？</i>
            <Button
              className={`${styles.button} ${styles.submit}`}
              onClick={signinRequest}
            >
              SIGN IN
            </Button>
          </form>
        </div>

        <div
          className={`${styles.switch} ${isgx ? styles.isGx : ''} ${istxr ? styles.isTxr : ''}`}
        >
          <div
            className={`${styles.switchCircle} ${istxr ? styles.isTxr : ''}`}
          ></div>
          <div
            className={`${styles.switchCircle} ${styles.switchCircleT} ${istxr ? styles.isTxr : ''}`}
          ></div>
          <div
            className={`${styles.switchContainer} ${ishidden ? styles.isHidden : ''}`}
          >
            <h2 className={styles.title} style={{ letterSpacing: '0' }}>
              Welcome Back!
            </h2>
            <p className={styles.description}>已经有账号了，使用学号登入账号</p>
            <Button
              className={`${styles.switchButton} ${styles.button}`}
              onClick={changeForm}
            >
              SIGN IN
            </Button>
          </div>

          <div
            className={`${styles.switchContainer} ${ishidden ? '' : styles.isHidden}`}
          >
            <h2 className={styles.title} style={{ letterSpacing: '0' }}>
              Hello Friend!
            </h2>
            <p className={styles.description}>还没有账号，使用学号注册账号</p>
            <Button
              className={`${styles.switchButton} ${styles.button}`}
              onClick={changeForm}
            >
              SIGN UP
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

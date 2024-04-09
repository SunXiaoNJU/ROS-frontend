import { PageContainer } from '@ant-design/pro-components';
import { Link } from '@umijs/max';
import { Button } from 'antd';
import { useRef, useState } from 'react';

const TEST: React.FC = () => {
  let [counter, setCounter] = useState(0);

  function throttled(delay: number) {
    // let startTime = Date.now();
    let timeout: any = null;
    return function () {
      // let curTime = Date.now();
      // if (curTime - startTime >= delay * 1000) {
      //   setCounter(++counter);
      //   startTime = Date.now();
      // }
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setCounter(++counter);
      }, delay * 1000);
    };
  }

  // 上拉加载
  function pullLoading() {
    const clientHeight = document.documentElement.clientHeight; // 浏览器高度
    const scrollHeight = document.body.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    // 触底公式
    if (scrollTop + clientHeight >= scrollHeight) {
    }
  }
  const counterRef = useRef(null);

  // 内嵌函数组件
  const Tmp: React.FC<{ content: string }> = (props) => {
    return (
      <>
        <p>{props.content}</p>
      </>
    );
  };

  const loginType = sessionStorage.getItem('accessId') !== '';

  return loginType ? (
    <PageContainer
      ghost
      header={{
        title: 'TEST',
      }}
    >
      <Tmp content="hello"></Tmp>
      <div ref={counterRef}>
        {`counter结果为${counter}`}
        <Button onClick={throttled(1)}>throttled test</Button>
        <>{pullLoading()}</>
      </div>
    </PageContainer>
  ) : (
    <Link to="/home" prefetch reloadDocument>
      home
    </Link>
  );
};

export default TEST;

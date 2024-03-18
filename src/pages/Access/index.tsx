import { PageContainer } from '@ant-design/pro-components';
import { Access, useAccess } from '@umijs/max';
import { Button } from 'antd';
import { useRef, useState } from 'react';

const AccessPage: React.FC = () => {
  const access = useAccess();
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

  return (
    <PageContainer
      ghost
      header={{
        title: '权限示例',
      }}
    >
      <Access accessible={access.canSeeAdmin}>
        <Button>只有 Admin 可以看到这个按钮</Button>
      </Access>
      <Tmp content="hello"></Tmp>
      <div ref={counterRef}>
        {`counter结果为${counter}`}
        <Button onClick={throttled(1)}>throttled test</Button>
        <>{pullLoading()}</>
      </div>
    </PageContainer>
  );
};

export default AccessPage;

import { PageContainer } from '@ant-design/pro-components';
import { history } from '@umijs/max';
import { Button } from 'antd';
import { useRef, useState } from 'react';

const TEST: React.FC = () => {
  let [counter, setCounter] = useState(0);
  let [sel, setSel] = useState('');

  function handleSel(event: React.ChangeEvent<HTMLSelectElement>) {
    setSel(event.target.value);
    console.log(event.target.value);
  }

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

  const loginType = sessionStorage.getItem('accessId') !== '';

  return loginType ? (
    <PageContainer ghost title="TEST">
      <select value={sel} onChange={handleSel}>
        {/* 下拉选择 */}
        <optgroup label="OS">
          <option>ROS</option>
          <option>RTOS</option>
          <option>OpenRTM</option>
        </optgroup>
        <optgroup label="Fruits">
          <option>Apple</option>
          <option>Banana</option>
          <option>Mango</option>
        </optgroup>
        <optgroup label="Vegetables">
          <option>Tomato</option>
          <option>Broccoli</option>
          <option>Carrot</option>
        </optgroup>
      </select>
      <p>
        {/* 上标、下标 */}H<sub>2</sub>O 4<sup>2</sup> = 16
      </p>
      <p title="World Health Organization">
        {/* 鼠标悬停显示title */}
        WHO
      </p>

      <a href="document.pdf" download="document.pdf">
        {/* 下载文件 */}Download PDF
      </a>
      <div contentEditable="true" spellCheck="true">
        你可以编辑这段文字
      </div>

      <div ref={counterRef}>
        {`counter结果为${counter}`}
        <Button onClick={throttled(1)}>throttled test</Button>
        <>{pullLoading()}</>
      </div>
    </PageContainer>
  ) : (
    <div>
      <Button onClick={() => history.push('/home')}>JUMP</Button>
      <a href="/home" target="_blank">
        HOME
      </a>
    </div>
  );
};

export default TEST;

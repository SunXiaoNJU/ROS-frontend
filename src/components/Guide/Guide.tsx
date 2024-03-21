import { Layout, Row, Typography } from 'antd';
import React from 'react';
import styles from './Guide.less';

interface Props {
  name: string;
  id: string;
}

// 脚手架示例组件
const Guide: React.FC<Props> = (props) => {
  const { name, id } = props;

  return (
    <Layout>
      <Row>
        <Typography.Title level={3} className={styles.title}>
          {id} 欢迎使用 {name} ！
        </Typography.Title>
      </Row>
    </Layout>
  );
};

export default Guide;

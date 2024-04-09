import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {
    dataField: '',
  },
  layout: {},
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
    {
      name: '文件上传',
      path: '/submit',
      component: './Submit',
    },
    {
      name: 'ROS可视化',
      path: '/visualization',
      component: './Visualization',
    },
    {
      name: 'TEST',
      path: '/test',
      component: './TEST_demo',
    },
  ],
  npmClient: 'pnpm',
});

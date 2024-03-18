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
      name: '权限演示',
      path: '/access',
      component: './Access',
    },
  ],
  npmClient: 'pnpm',
});

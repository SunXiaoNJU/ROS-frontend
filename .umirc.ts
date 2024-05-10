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
      wrappers: ['@/wrappers/auth'],
    },
    {
      name: 'ROS可视化',
      path: '/visualization',
      component: './Visualization',
      wrappers: ['@/wrappers/auth'],
    },
    {
      name: '资料管理',
      path: '/resource',
      component: './Resource',
      wrappers: ['@/wrappers/auth'],
    },
    {
      name: '文章管理',
      path: '/papers',
      component: './Papers',
      wrappers: ['@/wrappers/auth'],
    },
  ],
  npmClient: 'pnpm',
});

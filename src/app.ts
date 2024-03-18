// 运行时配置

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/max/data-flow#%E5%85%A8%E5%B1%80%E5%88%9D%E5%A7%8B%E7%8A%B6%E6%80%81
export async function getInitialState(): Promise<{ name: string }> {
  return { name: '用户名' };
  // models/global.ts 全局共享数据
}

export const layout = () => {
  return {
    // logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
    logo: '/ros.svg',
    title: 'ROS 考试系统',
    menu: {
      locale: false,
    },
  };
};

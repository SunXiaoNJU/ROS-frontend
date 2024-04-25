import { Navigate, Outlet } from '@umijs/max';

export default () => {
  const loginType = sessionStorage.getItem('accessId') !== '';
  if (loginType) {
    return <Outlet />;
  } else {
    return <Navigate to="/Home" />;
  }
};

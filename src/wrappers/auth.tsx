import { Navigate, Outlet } from '@umijs/max';

export default () => {
  const loginType = sessionStorage.getItem('loginId') !== null;
  if (loginType) {
    return <Outlet />;
  } else {
    return <Navigate to="/Home" />;
  }
};

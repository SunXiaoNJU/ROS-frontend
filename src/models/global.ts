// 全局共享数据示例
import { DEFAULT_Id } from '@/constants';
import { useState } from 'react';

const useUser = () => {
  const [id, setId] = useState<string>(DEFAULT_Id);
  const [access, setAccess] = useState<boolean>(false);
  return {
    id,
    setId,
    access,
    setAccess,
  };
};

export default useUser;

/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { userInfo } from '@/app/utils/userInfo';
import { createContext, useContext, useEffect, useState } from 'react';
const AuthContext = createContext<any>({
  user: null,
  setUser: () => {},
});
export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<any>(null);
  const fetch = async () => {
    const res = await userInfo();
    setUser(res);
  };
  useEffect(() => {
    fetch();
  }, []);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);

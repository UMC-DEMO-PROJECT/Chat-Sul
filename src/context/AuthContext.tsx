import {
  createContext,
  useState,
  useContext,
  useEffect,
  PropsWithChildren,
} from 'react';

type TAuthContext = {
  isLogin: boolean;
  setIsLogin: (state: boolean) => void;
};

const AuthContext = createContext<TAuthContext | null>(null);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [isLogin, setIsLogin] = useState<boolean>(
    !!localStorage.getItem('accessToken')
  );

  useEffect(() => {
    if (localStorage.getItem('accessToken')) setIsLogin(true);
    else setIsLogin(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLogin,
        setIsLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuthContext() {
  const context = useContext(AuthContext);
  if (context == null) {
    throw new Error('AuthProvider를 찾을 수 없습니다.');
  }

  return context;
}

import { useQuery } from '@tanstack/react-query';
import {
  createContext,
  useState,
  useContext,
  useEffect,
  PropsWithChildren,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { GetToken } from 'shared/api/token';

type TAuthContext = {
  isLogin: boolean;
  setIsLogin: (state: boolean) => void;
};

const AuthContext = createContext<TAuthContext | null>(null);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [isLogin, setIsLogin] = useState<boolean>(false);

  const navigate = useNavigate();

  const { data, isError } = useQuery({
    queryFn: () => GetToken(),
    queryKey: ['token'],
  });
  if (isError) {
    navigate('/');
  }

  useEffect(() => {
    if (data.result.accessToken) setIsLogin(true);
    else if (isError) setIsLogin(false);
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

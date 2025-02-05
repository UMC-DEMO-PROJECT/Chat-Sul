import { createContext, useState, useContext, PropsWithChildren } from 'react';

type TAuthContext = {
  isRole: string | null;
  setIsRole: (role: string) => void;
  ownerId: number;
  setOwnerId: (ownerId: number) => void;
  shopName: string | null;
  setShopName: (shopName: string) => void;
};

const OwnerContext = createContext<TAuthContext | null>(null);

export const OwnerProvider = ({ children }: PropsWithChildren) => {
  const role = localStorage.getItem('role');
  const id = localStorage.getItem('ownerId');
  const [isRole, setIsRole] = useState<string | null>(role);
  const [ownerId, setOwnerId] = useState<number>(Number(id));
  const [shopName, setShopName] = useState<string | null>(null);

  return (
    <OwnerContext.Provider
      value={{
        isRole,
        setIsRole,
        ownerId,
        setOwnerId,
        shopName,
        setShopName,
      }}
    >
      {children}
    </OwnerContext.Provider>
  );
};

export function useOwnerContext() {
  const context = useContext(OwnerContext);
  if (context == null) {
    throw new Error('OwnerProvider를 찾을 수 없습니다.');
  }

  return context;
}

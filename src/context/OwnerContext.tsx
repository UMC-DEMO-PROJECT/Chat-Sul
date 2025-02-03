import { createContext, useState, useContext, PropsWithChildren } from 'react';

type TAuthContext = {
  ownerId: string | null;
  setOwnerId: (role: string) => void;
  shopName: string | null;
  setShopName: (shopName: string) => void;
};

const OwnerContext = createContext<TAuthContext | null>(null);

export const OwnerProvider = ({ children }: PropsWithChildren) => {
  const [ownerId, setOwnerId] = useState<string | null>(null);
  const [shopName, setShopName] = useState<string | null>(null);

  return (
    <OwnerContext.Provider
      value={{
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

import { createContext, useState, useContext, PropsWithChildren } from 'react';

type TValue = {
  itemState: string | null;
  setItemState: (state: string) => void;
};

const ItemStateContext = createContext<TValue | null>(null);

export const ItemStateProvider = ({ children }: PropsWithChildren) => {
  const [itemState, setItemState] = useState<string | null>(null);

  return (
    <ItemStateContext.Provider
      value={{
        itemState,
        setItemState,
      }}
    >
      {children}
    </ItemStateContext.Provider>
  );
};

export function useItemStateContext() {
  const context = useContext(ItemStateContext);
  if (context == null) {
    throw new Error('OwnerProvider를 찾을 수 없습니다.');
  }

  return context;
}

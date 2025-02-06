import { PropsWithChildren, useReducer } from 'react';
import {
  dataReducer,
  SelectedModalDataDispatchContext,
  SelectedModalDataStateContext,
} from './SelectedModalDataContext';

const ModalContextProvider = ({ children }: PropsWithChildren) => {
  const [data, dispatch] = useReducer(dataReducer, {
    isOpen: false,
    alertType: 'WAITING_CONFIRMATION',
    info: {
      status: 'CANCELLED',
      reservationDate: '',
      reservationTime: '',
      numberOfGuests: -1,
      reservationName: '',
      reservationId: -1,
    },
  });
  return (
    <SelectedModalDataStateContext.Provider value={data}>
      <SelectedModalDataDispatchContext.Provider value={dispatch}>
        {children}
      </SelectedModalDataDispatchContext.Provider>
    </SelectedModalDataStateContext.Provider>
  );
};

export default ModalContextProvider;

import { PropsWithChildren, useReducer } from 'react';
import {
  SelectedDataDispatchContext,
  selectedDataReducer,
  SelectedDataStateContext,
} from './SelectedModalDataContext';

const ModalDataProvider = ({ children }: PropsWithChildren) => {
  const [data, dispatch] = useReducer(selectedDataReducer, {
    reservationId: -1,
    phone: '',
    isOpen: false,
    alertType: 'WAITING_DEPOSIT',
  });
  return (
    <SelectedDataStateContext.Provider value={data}>
      <SelectedDataDispatchContext.Provider value={dispatch}>
        {children}
      </SelectedDataDispatchContext.Provider>
    </SelectedDataStateContext.Provider>
  );
};

export default ModalDataProvider;

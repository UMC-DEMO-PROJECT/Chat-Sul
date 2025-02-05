import { createContext, useContext } from 'react';
import { AlertType } from '../type/TReserveList';

interface data {
  reservationId: number;
  phone: string;
  isOpen: boolean;
  alertType: AlertType;
}

type Action =
  | { type: 'WAITING_DEPOSIT'; reservationId: number }
  | { type: 'RESERVATION_CANCEL'; reservationId: number }
  | { type: 'RESERVATION_CANCEL_FAIL'; phone: string }
  | { type: 'CLOSE_MODAL' };

export const SelectedDataStateContext = createContext<undefined | data>(
  undefined
);
export const SelectedDataDispatchContext = createContext<
  undefined | React.Dispatch<Action>
>(undefined);

export const selectedDataReducer = (state: data, action: Action): data => {
  switch (action.type) {
    case 'RESERVATION_CANCEL_FAIL': {
      return {
        phone: action.phone,
        reservationId: state.reservationId,
        alertType: 'RESERVATION_CANCEL_FAIL',
        isOpen: true,
      };
    }
    case 'RESERVATION_CANCEL': {
      return {
        phone: state.phone,
        reservationId: action.reservationId,
        alertType: 'RESERVATION_CANCEL',
        isOpen: true,
      };
    }
    case 'WAITING_DEPOSIT': {
      return {
        phone: state.phone,
        reservationId: action.reservationId,
        alertType: 'WAITING_DEPOSIT',
        isOpen: true,
      };
    }
    case 'CLOSE_MODAL': {
      return {
        phone: state.phone,
        reservationId: state.reservationId,
        alertType: state.alertType,
        isOpen: false,
      };
    }
    default: {
      throw Error('Unknown Type');
    }
  }
};

export const useSelectedDataState = () => {
  const state = useContext(SelectedDataStateContext);
  if (!state) throw new Error('SelectedDataProvider Not Found');
  return state;
};

export const useSelectedDataDispatch = () => {
  const state = useContext(SelectedDataDispatchContext);
  if (!state) throw new Error('SelectedDataDispatchProvider Not Found');
  return state;
};

import { createContext, useContext } from 'react';
import {
  IOwnerReservationResponse,
  TAlertType,
  TItemStatus,
} from '../types/TReserveList';

interface reservationListModalInfo {
  isOpen: boolean;
  alertType: TAlertType;
  info: {
    status: TItemStatus;
    reservationDate: string;
    reservationTime: string;
    numberOfGuests: number;
    reservationName: string;
    reservationId: number;
  };
}

type Action =
  | { type: 'WAITING_CONFIRMATION'; value: IOwnerReservationResponse }
  | { type: 'WAITING_DEPOSIT'; value: IOwnerReservationResponse }
  | { type: 'CONFIRMED'; value: IOwnerReservationResponse }
  | { type: 'CANCELLED'; value: IOwnerReservationResponse }
  | { type: 'CLOSE_MODAL' };

export const SelectedModalDataStateContext = createContext<
  reservationListModalInfo | undefined
>(undefined);
export const SelectedModalDataDispatchContext = createContext<
  undefined | React.Dispatch<Action>
>(undefined);

export const dataReducer = (
  state: reservationListModalInfo,
  action: Action
): reservationListModalInfo => {
  switch (action.type) {
    case 'WAITING_CONFIRMATION': {
      return {
        ...state,
        info: {
          ...action.value,
        },
        isOpen: true,
        alertType: 'WAITING_CONFIRMATION',
      };
    }
    case 'WAITING_DEPOSIT': {
      return {
        ...state,
        info: {
          ...action.value,
        },
        isOpen: true,
        alertType: 'WAITING_DEPOSIT',
      };
    }
    case 'CLOSE_MODAL': {
      return {
        ...state,
        isOpen: false,
      };
    }
    case 'CANCELLED': {
      return {
        ...state,
        info: {
          ...action.value,
        },
        isOpen: false,
        alertType: 'WAITING_DEPOSIT',
      };
    }
    case 'CONFIRMED': {
      return {
        ...state,
        info: {
          ...action.value,
        },
        isOpen: false,
        alertType: 'WAITING_DEPOSIT',
      };
    }
    default: {
      throw Error('Type지정에러');
    }
  }
};

export const useSelectedDataState = () => {
  const state = useContext(SelectedModalDataStateContext);
  if (!state) throw new Error('OwnerContext is undefined');
  return state;
};

export const useSelectedDataDispatch = () => {
  const state = useContext(SelectedModalDataDispatchContext);
  if (!state) throw new Error('OwnerDispatchContext is undefined');
  return state;
};

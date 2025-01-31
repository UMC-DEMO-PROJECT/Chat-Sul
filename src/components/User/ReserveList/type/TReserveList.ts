export type TDataStatus =
  | 'CONFIRMED'
  | 'WAITING_CONFIRMATION'
  | 'WAITING_DEPOSIT'
  | 'CANCELLED';

export type TAlertType =
  | 'CONFIRMED'
  | 'WAITING_CONFIRMATION'
  | 'WAITING_DEPOSIT'
  | 'CANCELLED'
  | 'RESERVATION_CANCEL'
  | 'RESERVATION_CANCEL_FAIL';

export interface TSetIsOpen {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export type THandleModalOpen = (
  alertType: TAlertType,
  reservationId?: number
) => void;

export interface ReserVationCancelAlertProps extends TSetIsOpen {
  reservationId: number;
  handleModalOpen: THandleModalOpen;
}

export interface WaitingDepositProps extends TSetIsOpen {
  reservationId: number;
}

export interface AlertContainerProps extends TSetIsOpen {
  alertType: TAlertType;
  handleModalOpen: (alertType: TAlertType, reservationId?: number) => void;
  reservationId: number;
}

export interface IReserveListResponse {
  numberOfGuests: number;
  reservationDate: string;
  reservationId: number;
  reservationTime: string;
  status: TDataStatus;
  venueName: string;
}

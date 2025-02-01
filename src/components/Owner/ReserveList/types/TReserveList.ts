export type TMenuStatus =
  | 'ALL'
  | 'CONFIRMED'
  | 'WAITING_CONFIRMATION'
  | 'WAITING_DEPOSIT'
  | 'CANCELLED';

export type TDataStatus =
  | 'CONFIRMED'
  | 'WAITING_CONFIRMATION'
  | 'WAITING_DEPOSIT'
  | 'CANCELLED';

export type TAlertType = 'WAITING_CONFIRMATION' | 'WAITING_DEPOSIT';

export interface TSetIsOpen {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface AlertContainerProps extends TSetIsOpen {
  alertType: TAlertType;
  selectedReservationInfo: ISelectedReservationInfo;
}

export interface AlertProps extends TSetIsOpen {
  selectedReservationInfo: ISelectedReservationInfo;
}

export interface IOwnerReservationResponse {
  numberOfGuests: number;
  reservationDate: string;
  reservationId: number;
  reservationName: string;
  reservationTime: string;
  status: TDataStatus;
}

export interface ISelectedReservationInfo {
  numberOfGuests: number;
  reservationDate: string;
  reservationName: string;
  reservationTime: string;
  reservationId: number;
}

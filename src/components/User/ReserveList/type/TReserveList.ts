export type TAlertType =
  | 'CONFIRMED'
  | 'WAITING_CONFIRMATION'
  | 'WAITING_DEPOSIT'
  | 'CANCELLED';

export interface TSetIsOpen {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface TAlertContainerProps extends TSetIsOpen {
  alertType: TAlertType;
}

export interface TReserveListResponse {
  numberOfGuests: number;
  reservationDate: string;
  reservationId: number;
  reservationTime: string;
  status: TAlertType;
  venueName: string;
}

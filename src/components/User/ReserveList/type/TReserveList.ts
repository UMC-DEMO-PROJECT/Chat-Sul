type DataStatus =
  | 'CONFIRMED'
  | 'WAITING_CONFIRMATION'
  | 'WAITING_DEPOSIT'
  | 'CANCELLED';

export type AlertType =
  | 'WAITING_DEPOSIT'
  | 'RESERVATION_CANCEL'
  | 'RESERVATION_CANCEL_FAIL';

export interface IReserveListResponse {
  numberOfGuests: number;
  reservationDate: string;
  reservationId: number;
  reservationTime: string;
  status: DataStatus;
  venueName: string;
}

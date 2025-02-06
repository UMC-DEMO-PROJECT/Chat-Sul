export type TMenuStatus =
  | 'ALL'
  | 'CONFIRMED'
  | 'WAITING_CONFIRMATION'
  | 'WAITING_DEPOSIT'
  | 'CANCELLED';

export type TItemStatus =
  | 'CONFIRMED'
  | 'WAITING_CONFIRMATION'
  | 'WAITING_DEPOSIT'
  | 'CANCELLED';

export type TAlertType = 'WAITING_CONFIRMATION' | 'WAITING_DEPOSIT';
export interface IOwnerReservationResponse {
  numberOfGuests: number;
  reservationDate: string;
  reservationId: number;
  reservationName: string;
  reservationTime: string;
  status: TItemStatus;
}

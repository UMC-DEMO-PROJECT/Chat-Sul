export type ValuePiece = Date | null;
export type Value = ValuePiece | [ValuePiece, ValuePiece];

export interface reservationData {
  reservationName: string;
  phoneNumber: string;
  reservationDate: string;
  reservationTime: string;
  numberOfGuests: number;
  depositorName: string;
}
export type handlePostReservation = (reservationData: reservationData) => void;
export interface ReservatiomMutation {
  venueId: string | undefined;
  reservationData: reservationData;
}

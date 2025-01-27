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

export interface ReservatiomMutation {
  id: string | undefined;
  reservationData: reservationData;
}

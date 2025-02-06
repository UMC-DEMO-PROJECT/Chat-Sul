import { useEffect, useState } from 'react';

export const useReservationForm = () => {
  const [reservationName, setReservationName] = useState<string | null>(null);
  const [phoneNumber, setPhoneNumber] = useState<string | null>(null);
  const [reservationDate, setReservationDate] = useState<string | null>(null);
  const [reservationTime, setReservationTime] = useState<string | null>(null);
  const [numberOfGuests, setNumberOfGuests] = useState<string | null>(null);
  const [depositorName, setDepositorName] = useState<string | null>(null);

  const [isReservable, setIsReservable] = useState(false);

  const isValid =
    reservationName &&
    phoneNumber &&
    reservationDate &&
    reservationTime &&
    numberOfGuests &&
    depositorName;

  useEffect(() => {
    if (isValid) {
      setIsReservable(true);
    } else {
      setIsReservable(false);
    }
  }, [
    reservationName,
    phoneNumber,
    reservationDate,
    reservationTime,
    numberOfGuests,
    depositorName,
  ]);
  return {
    datas: {
      reservationName,
      phoneNumber,
      reservationDate,
      reservationTime,
      numberOfGuests,
      depositorName,
    },
    setFun: {
      setReservationName,
      setPhoneNumber,
      setReservationDate,
      setReservationTime,
      setNumberOfGuests,
      setDepositorName,
    },
    isReservable,
    setIsReservable,
  };
};

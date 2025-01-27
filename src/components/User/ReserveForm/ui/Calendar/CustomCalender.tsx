import Calendar from 'react-calendar';
import './Calendar.css';
import { useMemo } from 'react';
import { Value } from '../../types/types';

// ISOString은 9시간을 잃어버림.
// ISOString을 사용하기 위해 offset을 더해준다.
const parsingBeforetoISOString = (date: Date) => {
  const offset = date.getTimezoneOffset() / 60;
  const dateOffset = new Date(date);
  dateOffset.setHours(date.getHours() - offset);
  return dateOffset;
};

// 예약된 날짜 예시
const reservedDates = ['2025-02-03', '2025-02-06', '2025-02-10'];
interface CustomCalendarProps {
  reservedDate: string | null;
  setReservationDate: React.Dispatch<React.SetStateAction<string | null>>;
}

const CustomCalendar = ({
  reservedDate,
  setReservationDate,
}: CustomCalendarProps) => {
  const parsedDate = useMemo(() => {
    return reservedDate ? new Date(reservedDate) : null;
  }, [reservedDate]);

  const handleDateChange = (value: Value) => {
    // 단일 Date만 처리
    if (value instanceof Date) {
      const dateOffset = parsingBeforetoISOString(value);

      const dateString = dateOffset.toISOString().split('T')[0];
      setReservationDate(dateString);
    }
  };

  return (
    <>
      <Calendar
        locale="ko-KR"
        onChange={handleDateChange}
        value={parsedDate}
        calendarType="gregory" // 일요일부터 시작
        minDetail="month"
        maxDetail="month"
        prev2Label={null}
        next2Label={null}
        tileDisabled={({ date }) => {
          const dateOffset = parsingBeforetoISOString(date);
          const today = new Date();
          const isPast = date < new Date(today.setHours(0, 0, 0, 0));
          const isReserved = reservedDates.includes(
            dateOffset.toISOString().split('T')[0]
          );
          return isPast || isReserved; // 과거 날짜 또는 예약된 날짜 비활성화
        }}
        tileClassName={({ date }) => {
          const dateOffset = parsingBeforetoISOString(date);

          const today = new Date();
          const isReserved = reservedDates.includes(
            dateOffset.toISOString().split('T')[0]
          );
          const isPast: boolean = date < new Date(today.setHours(0, 0, 0, 0));

          if (isPast) return 'past';
          if (isReserved) return 'reserved';
          if (
            parsedDate &&
            dateOffset.toISOString().split('T')[0] ===
              parsedDate.toISOString().split('T')[0]
          ) {
            return 'selected';
          }
          return null;
        }}
        prevLabel={<img src="/icons/back.svg" alt="Forth" />}
        nextLabel={<img src="/icons/forth.svg" alt="next" />}
        // 월/년을 분리해 표시
        navigationLabel={({ date }) => {
          const year = date.getFullYear();
          const month = date.getMonth() + 1;
          return (
            <div style={{ textAlign: 'center' }}>
              <div className="font-bold text-[22px] leading-7">{month}월</div>
              <div className="text-[11px] ">{year}년</div>
            </div>
          );
        }}
        formatDay={(_locale, date) =>
          date.toLocaleString('en', { day: 'numeric' })
        }
        className="customCalendar w-full "
      />
    </>
  );
};

export default CustomCalendar;

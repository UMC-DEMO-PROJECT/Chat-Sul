import { useState } from 'react';
import Calendar from 'react-calendar';
import './Calendar.css';
type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];
// 예약된 날짜 예시
const reservedDates = [
  '2025-01-03',
  '2025-01-06',
  '2025-01-10', // 예약이 끝난 날짜 배열
];
function CustomCalendar() {
  const [value, onChange] = useState<Value>(null);
  // 내일 할 거 버튼이 눌리면 그 안에 시간이 펼쳐지게
  // 예약된 시간이 있다면 흰색으로 표시
  // 시나리오는 버튼을 누르면
  if (value instanceof Date) {
    console.log(value);
  }
  return (
    <div>
      <Calendar
        locale="ko-KR"
        onChange={onChange}
        value={value}
        calendarType="gregory" // 일요일부터 시작
        minDetail="month"
        maxDetail="month"
        prev2Label={null}
        next2Label={null}
        tileDisabled={({ date }) => {
          const offset = date.getTimezoneOffset() / 60;
          const dateOffset = new Date(date);
          dateOffset.setHours(date.getHours() - offset);

          const today = new Date();
          const isPast = date < new Date(today.setHours(0, 0, 0, 0));
          const isReserved = reservedDates.includes(
            dateOffset.toISOString().split('T')[0]
          );
          return isPast || isReserved; // 과거 날짜 또는 예약된 날짜 비활성화
        }}
        tileClassName={({ date }) => {
          const offset = date.getTimezoneOffset() / 60;
          const dateOffset = new Date(date);
          dateOffset.setHours(date.getHours() - offset);

          const today = new Date();
          const isReserved = reservedDates.includes(
            dateOffset.toISOString().split('T')[0]
          );
          const isPast: boolean = date < new Date(today.setHours(0, 0, 0, 0));

          // 조건에 따라 클래스 추가
          if (isPast) return 'past';
          if (isReserved) return 'reserved';
          if (
            value instanceof Date &&
            dateOffset.toISOString().split('T')[0] ===
              value.toISOString().split('T')[0]
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
        className="customCalendar w-full" // 여기서 .customCalendar에 대한 CSS를 작성
      />
    </div>
  );
}

export default CustomCalendar;

import { useState } from 'react';
import Calendar from 'react-calendar';

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
        prevLabel={
          <svg
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10.7803 3.46967C11.0732 3.76256 11.0732 4.23744 10.7803 4.53033L6.81066 8.5L10.7803 12.4697C11.0732 12.7626 11.0732 13.2374 10.7803 13.5303C10.4874 13.8232 10.0126 13.8232 9.71967 13.5303L5.21967 9.03033C4.92678 8.73744 4.92678 8.26256 5.21967 7.96967L9.71967 3.46967C10.0126 3.17678 10.4874 3.17678 10.7803 3.46967Z"
              fill="#636363"
            />
          </svg>
        }
        nextLabel={
          <svg
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.21967 3.46967C4.92678 3.76256 4.92678 4.23744 5.21967 4.53033L9.18934 8.5L5.21967 12.4697C4.92678 12.7626 4.92678 13.2374 5.21967 13.5303C5.51256 13.8232 5.98744 13.8232 6.28033 13.5303L10.7803 9.03033C11.0732 8.73744 11.0732 8.26256 10.7803 7.96967L6.28033 3.46967C5.98744 3.17678 5.51256 3.17678 5.21967 3.46967Z"
              fill="#636363"
            />
          </svg>
        }
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
        formatDay={(locale, date) =>
          date.toLocaleString('en', { day: 'numeric' })
        }
        className="customCalendar w-full" // 여기서 .customCalendar에 대한 CSS를 작성
      />
    </div>
  );
}

export default CustomCalendar;

import { useState } from 'react';
import Menu from './Menu';

// props의 타입 정의
// interface DropDownProps {
//   options: string[]; // 드롭다운 목록
//   onSelect: (value: string) => void; // 선택된 값을 처리하는 함수
// }

const timeToMinutes = (timeStr: string): number => {
  const [hh, mm] = timeStr.split(':').map(Number);
  return hh * 60 + mm;
};

// 분(minute)을 다시 "HH:MM" 형태로 바꿔주는 함수
const minutesToTime = (totalMinutes: number): string => {
  const hh = Math.floor(totalMinutes / 60)
    .toString()
    .padStart(2, '0');
  const mm = (totalMinutes % 60).toString().padStart(2, '0');
  return `${hh}:${mm}`;
};

const createTimeTable = (startTime: string, endTime: string): string[] => {
  const start = timeToMinutes(startTime); // 예: 18:00 -> 1080
  const end = timeToMinutes(endTime); // 예: 24:00 -> 1440
  const step = 30; // 30분 간격

  const result: string[] = [];
  for (let current = start; current <= end; current += step) {
    result.push(minutesToTime(current));
  }
  return result;
};

const timeTable = createTimeTable('18:00', '24:00'); // 이것도 요청으로 받아야하나?
const reservedTime = ['20:00', '21:00']; // 이건 API요청으로 받아야함

const DropDown = () => {
  const [timeToReserve, setTimeToReserve] = useState<string>(''); // 이건 form에 있는게 맞음

  return (
    <div className="w-full h-80 p-2 bg-white border-b border-black flex-col justify-start items-start gap-2 inline-flex overflow-auto">
      {timeTable.map((time, index) => (
        <Menu
          key={index}
          text={time}
          isSelected={timeToReserve === time}
          isReserved={reservedTime.includes(time)}
          onClick={(e) => {
            setTimeToReserve(e.currentTarget.name);
          }}
        />
      ))}
    </div>
  );
};

export default DropDown;

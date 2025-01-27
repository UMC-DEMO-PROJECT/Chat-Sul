import { useLocation } from 'react-router-dom';
import TopBar from '../../../shared/ui/TopBar/TopBar';

const KOREAN_DAYS = ['일', '월', '화', '수', '목', '금', '토'];

function formatReservationDate(dateStr: string, timeStr: string): string {
  // 1. dateStr ("2025-01-29") 파싱
  //    JS의 Date 생성자에서 month는 0이 January이므로, 직접 분해하여 사용
  const [year, month, day] = dateStr.split('-').map(Number); // "2025", "01", "29" → [2025, 1, 29]

  // 2. timeStr ("20:30:00") 파싱
  const [hourStr, minuteStr] = timeStr.split(':'); // "20", "30", "00"

  // 3. new Date(년, 월-1, 일, 시, 분)
  //    month-1인 이유: JS는 0=1월, 1=2월 ... 11=12월
  const dateObj = new Date(
    year,
    month - 1,
    day,
    Number(hourStr),
    Number(minuteStr)
  );

  // 4. 요일 구하기 (0=일 ~ 6=토)
  const dayOfWeekIndex = dateObj.getDay();
  const dayOfWeekKorean = KOREAN_DAYS[dayOfWeekIndex]; // "일", "월", "화", ...

  // 5. 최종 문자열 조립
  //    "2025년 1월 29일(수) 20시 30분"
  //    month, day는 그대로 숫자
  return `${year}년 ${month}월 ${day}일(${dayOfWeekKorean}) ${hourStr}시 ${minuteStr}분`;
}

// onFirstClick에서 버튼을 누르면 대관확인 페이지로 이동
const ReserveSuccessContainer = () => {
  const location = useLocation();
  const subTitle = formatReservationDate(
    location.state.reservationDate,
    location.state.reservationTime
  );
  return (
    <>
      <TopBar title="시오" onFirstClick={() => {}} />
      <div className="grid grid-rows-3">
        <div className="flex flex-col row-start-2">
          <div className="flex justify-center">
            <img src="/icons/check-one.svg" />
          </div>
          <p className="text-center text-black text-[22px] font-bold leading-7 mt-6">
            예약이 완료되었습니다.
          </p>
          <p className=" text-center text-[#8e8e93] text-xs font-normal leading-none">
            {subTitle}
          </p>
        </div>
      </div>
    </>
  );
};

export default ReserveSuccessContainer;

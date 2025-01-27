import { useLocation } from 'react-router-dom';
import TopBar from '../../../shared/ui/TopBar/TopBar';
import dateToformattedKorean from '../../../utils/dateToFormattedKorean';

// onFirstClick에서 버튼을 누르면 대관확인 페이지로 이동
const ReserveSuccessContainer = () => {
  const location = useLocation();
  const subTitle = dateToformattedKorean(
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

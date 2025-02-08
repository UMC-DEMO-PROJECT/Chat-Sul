import { useLocation, useNavigate, useParams } from 'react-router-dom';
import TopBar from '../../../shared/ui/TopBar/TopBar';
import dateToformattedKorean from '../../../utils/dateToFormattedKorean';

const ReserveSuccessContainer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { venueId } = useParams();
  const subTitle = dateToformattedKorean(
    location.state.reservationDate,
    location.state.reservationTime
  );
  return (
    <>
      <TopBar
        title="시오"
        onFirstClick={() => {
          navigate(`/user/shop/${venueId}`);
        }}
      />
      <div className="grid grid-rows-3 mt-[52px]">
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

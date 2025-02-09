import { useLocation, useNavigate, useParams } from 'react-router-dom';
import TopBar from '../../../shared/ui/TopBar/TopBar';
import dateToformattedKorean from '../../../utils/dateToFormattedKorean';
import { useMutation } from '@tanstack/react-query';
import { PostReservation } from 'shared/api/reservation';
import FailedAPI from 'shared/ui/Fail/FailedAPI';
import Button from 'shared/ui/Button/button';
import { useEffect } from 'react';
export interface reservationData {
  reservationName: string;
  phoneNumber: string;
  reservationDate: string;
  reservationTime: string;
  numberOfGuests: number;
  depositorName: string;
}

export interface ReservatiomMutation {
  venueId: string | undefined;
  reservationData: reservationData;
}

const ReserveSuccessContainer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { venueId } = useParams();
  const subTitle = dateToformattedKorean(
    location.state.reservationDate,
    location.state.reservationTime
  );

  const { mutate, isError, isPending } = useMutation({
    mutationFn: ({ venueId, reservationData }: ReservatiomMutation) =>
      PostReservation(venueId, reservationData),
    onSuccess: () => {},
    onError: () => {},
  });

  useEffect(() => {
    mutate({ venueId, reservationData: location.state });
  }, []);

  if (isError) {
    return (
      <>
        <TopBar
          title="시오"
          onFirstClick={() => {
            navigate(`/user/shop/${venueId}`);
          }}
        />
        <div className="h-full grid grid-rows-3 mt-[52px]">
          <div>
            <FailedAPI text="인터넷 연결이 끊어졌습니다." />
          </div>
          <div className="flex flex-col row-start-3 justify-end">
            <div className="mb-4 px-5">
              <Button
                size="small"
                colorType="unable"
                onClick={() => {
                  mutate({ venueId, reservationData: location.state });
                }}
              >
                다시 신청하기
              </Button>
            </div>
          </div>
        </div>
      </>
    );
  }
  if (isPending) {
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
              <img src="/icons/spinner.svg" width={150} height={150} />
            </div>
          </div>
        </div>
      </>
    );
  }
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
          <>
            <p className="text-center text-black text-[22px] font-bold leading-7 mt-6">
              예약이 완료되었습니다.
            </p>
            <p className=" text-center text-[#8e8e93] text-xs font-normal leading-none">
              {subTitle}
            </p>
          </>
        </div>
      </div>
    </>
  );
};

export default ReserveSuccessContainer;

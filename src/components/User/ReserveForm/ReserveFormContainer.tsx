import { PostReservation } from 'shared/api/reservation';
import ReserveFormState from './ReserveFormState';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useCallback, useState } from 'react';
import ReserveForm from './ReserveForm';
import {
  ReservatiomMutation,
  handlePostReservation,
  reservationData,
} from './types/types';
import TopBar from 'shared/ui/TopBar/TopBar';
import { useNavigate, useParams } from 'react-router-dom';
import dateToformattedKorean from '../../../utils/dateToFormattedKorean';
import { GetVenue } from 'shared/api/venue';

const ReserveFormContainer = () => {
  const navigate = useNavigate();
  const { venueId } = useParams();
  const [reTryreservationData, setReTryReservationData] =
    useState<reservationData | null>(null);
  const [subTitle, setSubTitle] = useState<string>('');

  const { data: venue } = useQuery({
    queryFn: () => GetVenue(Number(venueId)),
    queryKey: ['venueData'],
  });

  const { mutate, isError, isPending, isSuccess } = useMutation({
    mutationFn: ({ venueId, reservationData }: ReservatiomMutation) =>
      PostReservation(venueId, reservationData),
  });

  const handlePostReservation: handlePostReservation = (reservationData) => {
    setReTryReservationData(reservationData);
    setSubTitle(
      dateToformattedKorean(
        reservationData.reservationDate,
        reservationData.reservationTime
      )
    );
    mutate({ venueId, reservationData });
  };

  const handleRetry = useCallback(() => {
    if (reTryreservationData) {
      mutate({ venueId, reservationData: reTryreservationData });
    }
  }, [reTryreservationData]);

  // 상태 분기: 로딩 / 에러 / 성공 / 폼
  let content = null;

  if (isPending) {
    content = <ReserveFormState mode="loading" onRetry={handleRetry} />;
  } else if (isError) {
    content = <ReserveFormState mode="error" onRetry={handleRetry} />;
  } else if (isSuccess) {
    content = (
      <ReserveFormState
        mode="success"
        onRetry={handleRetry}
        subTitle={subTitle}
      />
    );
  } else {
    content = <ReserveForm handlePostReservation={handlePostReservation} />;
  }

  return (
    <>
      <TopBar
        title={venue?.result.name}
        onFirstClick={() => {
          navigate(`/user/shop/${venueId}`);
        }}
      />
      {content}
    </>
  );
};

export default ReserveFormContainer;

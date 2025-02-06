import AlertTwoButton from 'shared/ui/Modal/Alert/AlertTwoButton';
import { AlertProps } from '../../types/TReserveList';
import dateToformattedKorean from '../../../../../utils/dateToFormattedKorean';
import {
  PatchReservationBusinessAccept,
  PatchReservationBusinessReject,
} from 'shared/api/reservation';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const venueId = 6;
const WaitingDepositAlert = ({
  setIsOpen,
  selectedReservationInfo,
}: AlertProps) => {
  const queryClient = useQueryClient();
  const DateToKorean = dateToformattedKorean(
    selectedReservationInfo.reservationDate,
    selectedReservationInfo.reservationTime
  );

  const { mutate: rejectMutate } = useMutation({
    mutationFn: () =>
      PatchReservationBusinessReject(
        selectedReservationInfo.reservationId,
        venueId
      ),
    onSuccess: () => {
      setIsOpen(false);
    },
    onError: () => {
      alert('수락 서버와의 연결이 불안정합니다');
    },
  });

  const { mutate: acceptMutate } = useMutation({
    mutationFn: () =>
      PatchReservationBusinessAccept(
        selectedReservationInfo.reservationId,
        venueId
      ),
    onSuccess: () => {
      setIsOpen(false);
    },
    onError: () => {
      alert('수락 서버와의 연결이 불안정합니다');
    },
  });

  return (
    <AlertTwoButton
      btnMessage1="거절하기"
      btnMessage2="수락하기"
      onClick1={() => {
        rejectMutate();
        queryClient.invalidateQueries({
          queryKey: [`owner-reserve-list-${venueId}`],
        });
      }}
      onClick2={() => {
        acceptMutate();
        queryClient.invalidateQueries({
          queryKey: [`owner-reserve-list-${venueId}`],
        });
        // 수락하는 API
      }}
    >
      <div className="text-left w-full text-[#8e8e93] text-base font-normal leading-[21px] flex flex-col gap-1">
        <p>성함: {selectedReservationInfo.reservationName}</p>
        <p>{DateToKorean}</p>
        <p>인원: {selectedReservationInfo.numberOfGuests}명</p>
      </div>
    </AlertTwoButton>
  );
};

export default WaitingDepositAlert;

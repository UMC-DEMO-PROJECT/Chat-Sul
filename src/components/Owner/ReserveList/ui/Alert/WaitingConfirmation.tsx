import { AlertProps } from '../../types/TReserveList';
import dateToformattedKorean from '../../../../../utils/dateToFormattedKorean';
import AlertTwoButton from 'shared/ui/Modal/Alert/AlertTwoButton';
import { PatchReservationBusinessConfirm } from 'shared/api/reservation';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const venueId = 6;
const WaitingConfirmationAlert = ({
  setIsOpen,
  selectedReservationInfo,
}: AlertProps) => {
  const queryClient = useQueryClient();
  const DateToKorean = dateToformattedKorean(
    selectedReservationInfo.reservationDate,
    selectedReservationInfo.reservationTime
  );
  const { mutate: confirmMutate } = useMutation({
    mutationFn: () =>
      PatchReservationBusinessConfirm(
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
      btnMessage1="뒤로가기"
      btnMessage2="확정하기"
      onClick1={() => {
        setIsOpen(false);
        queryClient.invalidateQueries({
          queryKey: [`owner-reserve-list-${venueId}`],
        });
      }}
      onClick2={() => {
        confirmMutate();
        queryClient.invalidateQueries({
          queryKey: [`owner-reserve-list-${venueId}`],
        });
      }}
    >
      <div className="text-left w-full text-[#8e8e93] text-base font-normal leading-[21px] flex flex-col gap-10">
        <p>성함: {selectedReservationInfo.reservationName}</p>
        <p>{DateToKorean}</p>
        <p>인원: {selectedReservationInfo.numberOfGuests}명</p>
      </div>
    </AlertTwoButton>
  );
};

export default WaitingConfirmationAlert;

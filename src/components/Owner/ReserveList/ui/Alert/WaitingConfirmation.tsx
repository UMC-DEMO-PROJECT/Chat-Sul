import dateToformattedKorean from '../../../../../utils/dateToFormattedKorean';
import AlertTwoButton from 'shared/ui/Modal/Alert/AlertTwoButton';
import { PatchReservationBusinessConfirm } from 'shared/api/reservation';
import { useMutation } from '@tanstack/react-query';
import {
  useSelectedDataDispatch,
  useSelectedDataState,
} from '../../context/SelectedModalDataContext';
import useOwnerReserveListValidateQuery from '../../hooks/useOwnerReserveListValidateQuery';
import { useOwnerContext } from '../../../../../context/OwnerContext';

const WaitingConfirmationAlert = () => {
  const { ownerId: venueId } = useOwnerContext();
  const modalData = useSelectedDataState();
  const dispatch = useSelectedDataDispatch();

  const validateQuery = useOwnerReserveListValidateQuery(
    `owner-reserve-list-${venueId}`
  );
  const DateToKorean = dateToformattedKorean(
    modalData.info.reservationDate,
    modalData.info.reservationTime
  );
  const { mutate: confirmMutate } = useMutation({
    mutationFn: () =>
      PatchReservationBusinessConfirm(
        modalData.info.reservationId,
        Number(venueId)
      ),
    onSuccess: () => {
      dispatch({ type: 'CLOSE_MODAL' });
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
        dispatch({ type: 'CLOSE_MODAL' });
        validateQuery();
      }}
      onClick2={() => {
        confirmMutate();
        validateQuery();
      }}
    >
      <div className="text-left w-full text-[#8e8e93] text-base font-normal leading-[21px] flex flex-col gap-10">
        <p>성함: {modalData.info.reservationName}</p>
        <p>{DateToKorean}</p>
        <p>인원: {modalData.info.numberOfGuests}명</p>
      </div>
    </AlertTwoButton>
  );
};

export default WaitingConfirmationAlert;

import AlertTwoButton from 'shared/ui/Modal/Alert/AlertTwoButton';
import dateToformattedKorean from '../../../../../utils/dateToFormattedKorean';
import {
  PatchReservationBusinessAccept,
  PatchReservationBusinessReject,
} from 'shared/api/reservation';
import { useMutation } from '@tanstack/react-query';
import {
  useSelectedDataDispatch,
  useSelectedDataState,
} from '../../context/SelectedModalDataContext';
import useOwnerReserveListValidateQuery from '../../hooks/useOwnerReserveListValidateQuery';
import { useOwnerContext } from '../../../../../context/OwnerContext';

const WaitingDepositAlert = () => {
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

  const { mutate: rejectMutate } = useMutation({
    mutationFn: () =>
      PatchReservationBusinessReject(
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

  const { mutate: acceptMutate } = useMutation({
    mutationFn: () =>
      PatchReservationBusinessAccept(
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
      btnMessage1="거절하기"
      btnMessage2="수락하기"
      onClick1={() => {
        rejectMutate();
        validateQuery();
      }}
      onClick2={() => {
        acceptMutate();
        validateQuery();
      }}
    >
      <div className="text-left w-full text-[#8e8e93] text-base font-normal leading-[21px] flex flex-col gap-1">
        <p>성함: {modalData.info.reservationName}</p>
        <p>{DateToKorean}</p>
        <p>인원: {modalData.info.numberOfGuests}명</p>
      </div>
    </AlertTwoButton>
  );
};

export default WaitingDepositAlert;

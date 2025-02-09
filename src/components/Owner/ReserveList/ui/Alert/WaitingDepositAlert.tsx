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
    `owner-reserve-list`,
    venueId
  );

  const DateToKorean = dateToformattedKorean(
    modalData.info.reservationDate,
    modalData.info.reservationTime
  );

  const { mutate: rejectMutate, isError: isRejectError } = useMutation({
    mutationFn: () =>
      PatchReservationBusinessReject(
        modalData.info.reservationId,
        Number(venueId)
      ),
    onSuccess: () => {
      validateQuery();
      dispatch({ type: 'CLOSE_MODAL' });
    },
  });

  const { mutate: acceptMutate, isError: isAcceptError } = useMutation({
    mutationFn: () =>
      PatchReservationBusinessAccept(
        modalData.info.reservationId,
        Number(venueId)
      ),
    onSuccess: () => {
      validateQuery();
      dispatch({ type: 'CLOSE_MODAL' });
    },
  });

  return (
    <AlertTwoButton
      btnMessage1="거절하기"
      btnMessage2="수락하기"
      onClick1={() => {
        rejectMutate();
      }}
      onClick2={() => {
        acceptMutate();
      }}
    >
      <div className="text-left w-full text-[#8e8e93] text-base font-normal leading-[21px] flex flex-col gap-1">
        {isRejectError || isAcceptError ? (
          <div className="mt-3 text-sul-gray-400 text-base">
            <p>네트워크 연결상태가 좋지않습니다.</p>
            <p>다시 시도해주세요</p>
          </div>
        ) : (
          <>
            <p>성함: {modalData.info.reservationName}</p>
            <p>{DateToKorean}</p>
            <p>인원: {modalData.info.numberOfGuests}명</p>
          </>
        )}
      </div>
    </AlertTwoButton>
  );
};

export default WaitingDepositAlert;

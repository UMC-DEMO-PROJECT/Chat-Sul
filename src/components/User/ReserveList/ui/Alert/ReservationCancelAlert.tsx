import { useMutation } from '@tanstack/react-query';
import AlertTwoButton from 'shared/ui/Modal/Alert/AlertTwoButton';
import { PatchReservationCancel } from 'shared/api/reservation';
import {
  useSelectedDataDispatch,
  useSelectedDataState,
} from '../../context/SelectedModalDataContext';
import useReserveListValidateQuery from '../../hooks/useReserveListValidateQuery';

const ResrvationCancelAlert = () => {
  const modalData = useSelectedDataState();
  const dispatch = useSelectedDataDispatch();
  const vaildateReserveList = useReserveListValidateQuery();

  const { mutate, isError } = useMutation({
    mutationFn: () => PatchReservationCancel(modalData.reservationId),
    onSuccess: ({ data }) => {
      if (data.isSuccess == false) {
        dispatch({
          type: 'RESERVATION_CANCEL_FAIL',
          phone: data.result.phone,
        });
      } else {
        vaildateReserveList();
        dispatch({
          type: 'CLOSE_MODAL',
        });
      }
    },
  });
  return (
    <AlertTwoButton
      btnMessage1="돌아가기"
      btnMessage2="취소하기"
      onClick1={() => {
        dispatch({
          type: 'CLOSE_MODAL',
        });
      }}
      onClick2={() => {
        mutate();
      }}
    >
      <div className="text-[#2d2d2d] font-normal leading-[18px] text-center flex flex-col items-center">
        {isError ? (
          <div className="mt-3 text-sul-gray-400 text-base">
            <p>네트워크 연결상태가 좋지않습니다.</p>
            <p>다시 시도해주세요</p>
          </div>
        ) : (
          <p className="mt-3">정말로 예약을 취소하시겠습니까?</p>
        )}
      </div>
    </AlertTwoButton>
  );
};

export default ResrvationCancelAlert;

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

  const { mutate } = useMutation({
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
    onError: () => {
      alert('서버와의 연결이 불안정합니다');
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
      <div className="text-[#2d2d2d] text-[13px] font-normal leading-[18px]">
        정말로 예약을 취소하시겠습니까?
      </div>
    </AlertTwoButton>
  );
};

export default ResrvationCancelAlert;

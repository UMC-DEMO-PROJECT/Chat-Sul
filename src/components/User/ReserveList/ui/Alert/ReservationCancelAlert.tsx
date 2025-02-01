import { useMutation } from '@tanstack/react-query';
import AlertTwoButton from 'shared/ui/Modal/Alert/AlertTwoButton';
import { ReserVationCancelAlertProps } from '../../type/TReserveList';
import { PatchReservationCancel } from 'shared/api/reservation';

const ResrvationCancelAlert = ({
  setIsOpen,
  handleModalOpen,
  reservationId,
}: ReserVationCancelAlertProps) => {
  const { mutate } = useMutation({
    mutationFn: () => PatchReservationCancel(reservationId),
    onSuccess: ({ data }) => {
      if (data.isSuccess == false) {
        handleModalOpen(
          'RESERVATION_CANCEL_FAIL',
          undefined,
          data.result.phone
        );
      } else {
        setIsOpen(true);
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
        setIsOpen(false);
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

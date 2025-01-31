import { useMutation } from '@tanstack/react-query';
import AlertTwoButton from 'shared/ui/Modal/Alert/AlertTwoButton';
import { ReserVationCancelAlertProps } from '../../type/TReserveList';
import { PatchReservationCancel } from 'shared/api/reservation';

const ResrvationCancelAlert = ({
  setIsOpen,
  handleModalOpen,
  reservationId,
}: ReserVationCancelAlertProps) => {
  const { data, mutate } = useMutation({
    mutationFn: () => PatchReservationCancel(reservationId),
    onSuccess: () => {
      //성공했을 때 여기서 서버요청의 결과에 따라
      // 서버 요청 성공인데 취소 불가능인 경우handleModalOpen('RESERVATION_CANCEL_FAIL');
      // 서버 요청 성공인데 취소 가능한 경우 setIsOpen(false);
      // 로딩 시 로딩중인거 어떻게 넣을까
    },
    onError: () => {
      // 에러처리는 어떻게 할지 고민.
    },
  });
  console.log(data);
  // 돌아가기
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

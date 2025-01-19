import AlertOneButton from '../../../shared/ui/Modal/Alert/AlertOneButton';
import AlertTwoButton from '../../../shared/ui/Modal/Alert/AlertTwoButton';
interface AlertContainerProps {
  alertType:
    | 'confirmed'
    | 'watingConfirmation'
    | 'waitingDeposit'
    | 'cancelled';
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AlertContainer = ({ alertType, setIsOpen }: AlertContainerProps) => {
  // 계좌번호 서버에서 요청 받아야함
  if (alertType === 'confirmed') {
    return (
      <AlertTwoButton
        onClick1={() => {}}
        onClick2={() => {}}
        btnMessage1="돌아가기"
        btnMessage2="취소하기"
      >
        <p className="text-[#8e8e93] text-base font-normal leading-[21px]">
          정말로 예약을 취소하시겠습니까?
        </p>
      </AlertTwoButton>
    );
  }
  if (alertType === 'cancelled') {
    return (
      <AlertOneButton buttonMessage="확인" onClick={() => {}}>
        <div className="text-[#2d2d2d] text-[13px] font-normal leading-[18px]">
          대관이 실패되었습니다.
        </div>
      </AlertOneButton>
    );
  }
  if (alertType === 'waitingDeposit') {
    return (
      <AlertOneButton
        buttonMessage="확인"
        onClick={() => {
          setIsOpen(false);
        }}
      >
        <div className="text-center">
          <p className="text-[#8e8e93] text-base font-normal leading-[21px]">
            예약이 대기 중입니다.
            <br />
            계좌번호로 예약금을 송금해주세요.
            <br />
            <br />
          </p>
          <p className="text-black text-base font-bold leading-[21px]">
            계좌번호: 하나 21512521514
          </p>
        </div>
      </AlertOneButton>
    );
  }

  if (alertType === 'watingConfirmation') {
    return (
      <AlertOneButton
        buttonMessage="확인"
        onClick={() => {
          setIsOpen(false);
        }}
      >
        <div className="text-center">
          <p className="text-[#8e8e93] text-base font-normal leading-[21px]">
            예약이 확정 대기 중입니다.
          </p>
        </div>
      </AlertOneButton>
    );
  }
};

export default AlertContainer;

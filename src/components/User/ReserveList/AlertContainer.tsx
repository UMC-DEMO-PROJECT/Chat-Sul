import AlertOneButton from '../../../shared/ui/Modal/Alert/AlertOneButton';

interface AlertContainerProps {
  alertType: 'confirmed' | 'failed' | 'pending' | null;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const AlertContainer = ({ alertType, setIsOpen }: AlertContainerProps) => {
  if (alertType === 'confirmed') {
    return (
      <AlertTwoButton buttonMessage="확정" onClick={() => {}}>
        <div className="text-[#2d2d2d] text-[13px] font-normal font-['SF Pro'] leading-[18px]">
          정말로 예약을 취소하시겠습니까?
        </div>
      </AlertTwoButton>
    );
  }
  if (alertType === 'failed') {
    return (
      <AlertOneButton buttonMessage="확인" onClick={() => {}}>
        <div className="text-[#2d2d2d] text-[13px] font-normal font-['SF Pro'] leading-[18px]">
          대관이 실패되었습니다.
        </div>
      </AlertOneButton>
    );
  }
  if (alertType === 'pending') {
    return (
      <AlertOneButton
        buttonMessage="확인"
        onClick={() => {
          setIsOpen(false);
        }}
      >
        <div className="text-center">
          <p className="text-[#8e8e93] text-base font-normal font-['SF Pro'] leading-[21px]">
            예약이 대기 중입니다.
            <br />
            계좌번호로 예약금을 송금해주세요.
            <br />
            <br />
          </p>
          <p className="text-black text-base font-bold font-['SF Pro'] leading-[21px]">
            계좌번호: 하나 21512521514
          </p>
        </div>
      </AlertOneButton>
    );
  }
};

export default AlertContainer;

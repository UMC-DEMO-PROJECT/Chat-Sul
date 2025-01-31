import AlertTwoButton from '../../../shared/ui/Modal/Alert/AlertTwoButton';

interface AlertContainerProps {
  alertType:
    | 'CONFIRMED'
    | 'WAITING_CONFIRMATION'
    | 'WAITING_DEPOSIT'
    | 'CANCELLED';
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AlertContainer = ({ alertType, setIsOpen }: AlertContainerProps) => {
  // 계좌번호 서버에서 요청 받아야함
  if (alertType === 'CONFIRMED') {
    return (
      <AlertTwoButton
        btnMessage1="돌아가기"
        btnMessage2="취소하기"
        onClick1={() => {}}
        onClick2={() => {}}
      >
        <p className="text-[#8e8e93] text-base font-normal leading-[21px]">
          정말로 예약을 취소하시겠습니까?
        </p>
      </AlertTwoButton>
    );
  }
  if (alertType === 'WAITING_CONFIRMATION') {
    return (
      <AlertTwoButton
        btnMessage1="뒤로가기"
        btnMessage2="수락하기"
        onClick1={() => {
          setIsOpen(false);
        }}
        onClick2={() => {}}
      >
        <div className="text-left text-[#8e8e93] text-base font-normal leading-[21px]">
          <p className="">성명 : 홍길동</p>
          <p>날짜 : 2024년 12월 20일(금) 20시 30분</p>
          <p>인원 : 25명</p>
        </div>
      </AlertTwoButton>
    );
  }
  if (alertType === 'WAITING_DEPOSIT') {
    return (
      <AlertTwoButton
        btnMessage1="거절하기"
        btnMessage2="수락하기"
        onClick1={() => {
          setIsOpen(false);
        }}
        onClick2={() => {}}
      >
        <div className="text-left text-[#8e8e93] text-base font-normal leading-[21px]">
          <p className="">성명 : 홍길동</p>
          <p>날짜 : 2024년 12월 20일(금) 20시 30분</p>
          <p>인원 : 25명</p>
        </div>
      </AlertTwoButton>
    );
  }
};

export default AlertContainer;

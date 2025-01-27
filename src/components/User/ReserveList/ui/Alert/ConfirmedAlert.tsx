import AlertTwoButton from 'shared/ui/Modal/Alert/AlertTwoButton';

const ConfirmedAlert = () => {
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
};

export default ConfirmedAlert;

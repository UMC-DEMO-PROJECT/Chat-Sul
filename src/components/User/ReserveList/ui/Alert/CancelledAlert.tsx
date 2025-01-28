import AlertOneButton from 'shared/ui/Modal/Alert/AlertOneButton';

const CancelledAlert = () => {
  return (
    <AlertOneButton buttonMessage="확인" onClick={() => {}}>
      <div className="text-[#2d2d2d] text-[13px] font-normal leading-[18px]">
        대관이 실패되었습니다.
      </div>
    </AlertOneButton>
  );
};

export default CancelledAlert;

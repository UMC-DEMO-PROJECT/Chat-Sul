import AlertOneButton from 'shared/ui/Modal/Alert/AlertOneButton';
import { TSetIsOpen } from '../../type/TReserveList';

const WaitingConfirmation = ({ setIsOpen }: TSetIsOpen) => {
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
};

export default WaitingConfirmation;

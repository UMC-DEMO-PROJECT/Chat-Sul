import AlertOneButton from 'shared/ui/Modal/Alert/AlertOneButton';
import { TSetIsOpen } from '../../type/TReserveList';
// import { useQuery } from '@tanstack/react-query';
// import { GetReservationAccountInfo } from 'shared/api/reservation';

const WaitingDepositAlert = ({ setIsOpen }: TSetIsOpen) => {
  // const depoitInfo = useQuery({
  //   queryFn: ()=> GetReservationAccountInfo(),
  // });
  return (
    <AlertOneButton
      buttonMessage="확인"
      onClick={() => {
        setIsOpen(false);
      }}
    >
      <div className="text-center">
        <p className="text-[#8e8e93] text-base font-normal leading-[21px]">
          예약이 입금 대기 중입니다.
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
};

export default WaitingDepositAlert;

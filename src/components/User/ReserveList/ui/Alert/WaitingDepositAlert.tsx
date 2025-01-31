import AlertOneButton from 'shared/ui/Modal/Alert/AlertOneButton';
import { useQuery } from '@tanstack/react-query';
import { GetReservationAccountInfo } from 'shared/api/reservation';
import { WaitingDepositProps } from '../../type/TReserveList';

const WaitingDepositAlert = ({
  setIsOpen,
  reservationId,
}: WaitingDepositProps) => {
  const { data, isError, isLoading } = useQuery({
    queryKey: [`account-${reservationId}`],
    queryFn: () => GetReservationAccountInfo(reservationId),
  });
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
          {isError && '서버와의 연결이 불안정합니다.'}
          {isLoading && '계좌번호 가져오는 중'}
          {data?.result.bank}
        </p>
      </div>
    </AlertOneButton>
  );
};

export default WaitingDepositAlert;

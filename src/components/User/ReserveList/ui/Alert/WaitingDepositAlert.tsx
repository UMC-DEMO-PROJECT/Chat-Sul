import AlertOneButton from 'shared/ui/Modal/Alert/AlertOneButton';
import { useQuery } from '@tanstack/react-query';
import { GetReservationAccountInfo } from 'shared/api/reservation';
import {
  useSelectedDataDispatch,
  useSelectedDataState,
} from '../../context/SelectedModalDataContext';

const WaitingDepositAlert = () => {
  const modalData = useSelectedDataState();
  const dispatch = useSelectedDataDispatch();
  const { data, isError, isLoading } = useQuery({
    queryKey: [`account-${modalData.reservationId}`],
    queryFn: () => GetReservationAccountInfo(modalData.reservationId),
  });
  return (
    <AlertOneButton
      buttonMessage="확인"
      onClick={() => {
        dispatch({
          type: 'CLOSE_MODAL',
        });
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
          {isError && '네트워크 연결상태가 좋지않습니다.'}
          {isLoading && '...'}
          {data?.result.bank}
          <br />
          {data?.result.account}
        </p>
      </div>
    </AlertOneButton>
  );
};

export default WaitingDepositAlert;

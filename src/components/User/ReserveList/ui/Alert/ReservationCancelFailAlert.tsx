import AlertOneButton from 'shared/ui/Modal/Alert/AlertOneButton';
import {
  useSelectedDataDispatch,
  useSelectedDataState,
} from '../../context/SelectedModalDataContext';

const ReservationCancelFailAlert = () => {
  const modalData = useSelectedDataState();
  const dispatch = useSelectedDataDispatch();
  return (
    <AlertOneButton
      buttonMessage="확인"
      onClick={() => {
        dispatch({
          type: 'CLOSE_MODAL',
        });
      }}
    >
      <div className=" text-center">
        <p className="text-[#8e8e93] text-base font-normal leading-[21px]">
          예약 취소 실패.
          <br />
          예약 2일 전에는 취소가 불가능합니다.
          <br />
          세부 사항은 가게 전화를 이용해주세요.
          <br />
          전화번호: {modalData.phone}
          <br />
        </p>
      </div>
    </AlertOneButton>
  );
};

export default ReservationCancelFailAlert;

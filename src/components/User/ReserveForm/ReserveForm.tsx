import { useState } from 'react';
import Input from '../../../shared/ui/Input/Input';
import ModalLayout from '../../../shared/ui/Modal/ModalLayout/ModalLayout';
import Button from '../../../shared/ui/Button/button';
import ViewOnlyInputContainer from './ui/Input/ViewOnlyInputContainer';
import AlertOneButton from '../../../shared/ui/Modal/Alert/AlertOneButton';
import ModalContents from './ui/ModalContents/ModalContents';
import { useReservationForm } from './hooks/useReservationForm';
import { handlePostReservation } from './types/types';

const nullToString = (value: string | null) => {
  if (value == null) {
    return '';
  }
  return value;
};
const ReserveForm = ({
  handlePostReservation,
}: {
  handlePostReservation: handlePostReservation;
}) => {
  const { datas, setFun, isReservable } = useReservationForm();
  const [isModalOepn, setIsModalOpen] = useState(false);

  const handleSubmit = () => {
    if (isReservable === false) {
      return;
    }

    const reservationData = {
      reservationName: datas.reservationName!,
      phoneNumber: datas.phoneNumber!,
      reservationDate: datas.reservationDate!,
      reservationTime: datas.reservationTime!,
      numberOfGuests: Number(datas.numberOfGuests!),
      depositorName: datas.depositorName!,
    };
    handlePostReservation(reservationData);
    setIsModalOpen(false);
  };
  return (
    <>
      <div className=" flex flex-col px-6 my-6 gap-4 mt-[52px]">
        <Input
          value={nullToString(datas.reservationName)}
          onChange={(e) => setFun.setReservationName(e.target.value)}
          title="예약자명"
          placeholder="예약자명을 입력해주세요"
        />
        <Input
          value={nullToString(datas.depositorName)}
          onChange={(e) => setFun.setDepositorName(e.target.value)}
          title="입금자명"
          placeholder="입금자명을 입력해주세요"
        />
        <Input
          value={nullToString(datas.phoneNumber)}
          onChange={(e) => setFun.setPhoneNumber(e.target.value)}
          title="전화번호"
          placeholder="전화번호를 입력해주세요"
        />
        <ViewOnlyInputContainer>
          <ViewOnlyInputContainer.Input
            title="예약일"
            value={nullToString(datas.reservationDate)}
            placeholder="예약일을 선택해주세요"
          />
          <ViewOnlyInputContainer.Calendar
            reservedDate={nullToString(datas.reservationDate)}
            setReservationDate={setFun.setReservationDate}
          />
        </ViewOnlyInputContainer>
        <ViewOnlyInputContainer>
          <ViewOnlyInputContainer.Input
            title="예약시간"
            value={nullToString(datas.reservationTime)}
            placeholder="예약시간을 선택해주세요"
          />
          <ViewOnlyInputContainer.DropDown
            reservationTime={nullToString(datas.reservationTime)}
            setReservationTime={setFun.setReservationTime}
          />
        </ViewOnlyInputContainer>
        <Input
          value={nullToString(datas.numberOfGuests)}
          onChange={(e) => setFun.setNumberOfGuests(e.target.value)}
          title="인원"
          placeholder="인원 수를 입력해주세요"
        />
        <Button
          onClick={() => {
            setIsModalOpen(true);
          }}
          size="large"
          colorType={!isReservable ? 'unable' : 'filled'}
          disabled={!isReservable}
        >
          신청하기
        </Button>
        <ModalLayout
          isOpen={isModalOepn}
          closeModal={() => {
            setIsModalOpen(false);
          }}
        >
          <AlertOneButton onClick={handleSubmit} buttonMessage="확인했습니다.">
            <ModalContents />
          </AlertOneButton>
        </ModalLayout>
      </div>
    </>
  );
};

export default ReserveForm;

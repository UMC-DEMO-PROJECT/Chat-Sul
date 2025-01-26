import { useState } from 'react';
import Input from '../../../shared/ui/Input/Input';
import ModalLayout from '../../../shared/ui/Modal/ModalLayout/ModalLayout';
import TopBar from '../../../shared/ui/TopBar/TopBar';
import Button from '../../../shared/ui/Button/button';
import ViewOnlyInputContainer from './Input/ViewOnlyInputContainer';
import AlertOneButton from '../../../shared/ui/Modal/Alert/AlertOneButton';
import ModalContents from './ModalContents/ModalContents';
import { useNavigate } from 'react-router-dom';

const ReserveFormContainer = () => {
  // Caelndar에서 선택된 값을 Input에 띄워주려다가 타입 에러 떠서 못하고 끔.
  const [reservationName, setReservationName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [reservationDate, setReservationDate] = useState<string | null>(null);
  const [reservationTime, setReservationTime] = useState<string | null>(null);
  const [numberOfGuests, setNumberOfGuests] = useState('');
  const [depositorName, setDepositorName] = useState('');

  const [isModalOepn, setIsModalOpen] = useState(false);

  const navigate = useNavigate();

  const handleBackCilck = () => {
    // navigate(-1); // 가게화면으로 이동
  };

  const handleSubmit = () => {
    const payload = {
      reservationName,
      phoneNumber,
      reservationDate,
      reservationTime,
      numberOfGuests: Number(numberOfGuests),
      depositorName,
    };
    // Send payload to server with fetch or axios
    // ...

    setIsModalOpen(true);
  };

  return (
    <>
      <TopBar title="대관 신청" onFirstClick={handleBackCilck} />
      <div className=" flex flex-col px-6 my-6 gap-4">
        <Input
          value={reservationName}
          onChange={(e) => setReservationName(e.target.value)}
          title="예약자명"
          placeholder="예약자명을 입력해주세요"
        />
        <Input
          value={depositorName}
          onChange={(e) => setDepositorName(e.target.value)}
          title="입금자명"
          placeholder="입금자명을 입력해주세요"
        />
        <Input
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          title="전화번호"
          placeholder="전화번호를 입력해주세요"
        />
        <ViewOnlyInputContainer>
          <ViewOnlyInputContainer.Input
            title="예약일"
            value={reservationDate}
            placeholder="예약일을 선택해주세요"
          />
          <ViewOnlyInputContainer.Calendar
            reservedDate={reservationDate}
            setReservationDate={setReservationDate}
          />
        </ViewOnlyInputContainer>
        <ViewOnlyInputContainer>
          <ViewOnlyInputContainer.Input
            title="예약시간"
            value={reservationTime}
            placeholder="예약시간을 선택해주세요"
          />
          <ViewOnlyInputContainer.DropDown
            reservationTime={reservationTime}
            setReservationTime={setReservationTime}
          />
        </ViewOnlyInputContainer>
        <Input
          value={numberOfGuests}
          onChange={(e) => setNumberOfGuests(e.target.value)}
          title="인원"
          placeholder="인원 수를 입력해주세요"
        />
        <Button onClick={handleSubmit} size="large" colorType="filled">
          신청하기
        </Button>
        <ModalLayout isOpen={isModalOepn} closeModal={() => {}}>
          <AlertOneButton
            onClick={() => {
              setIsModalOpen(false);
              navigate('/user/reserve-success');
            }}
            buttonMessage="확인했습니다."
          >
            <ModalContents />
          </AlertOneButton>
        </ModalLayout>
      </div>
    </>
  );
};

export default ReserveFormContainer;

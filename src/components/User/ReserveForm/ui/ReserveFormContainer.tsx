import { useState } from 'react';
import Input from '../../../../shared/ui/Input/Input';
import ModalLayout from '../../../../shared/ui/Modal/ModalLayout/ModalLayout';
import TopBar from '../../../../shared/ui/TopBar/TopBar';
import Button from '../../../../shared/ui/Button/button';
import ViewOnlyInputContainer from './Input/ViewOnlyInputContainer';
import AlertOneButton from '../../../../shared/ui/Modal/Alert/AlertOneButton';
import ModalContents from './ModalContents/ModalContents';
import { useNavigate, useParams } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { PostReservation } from '../../../../shared/api/reservation';
import { ReservatiomMutation } from '../types/types';
import { useReservationForm } from '../hooks/useReservationForm';

const nullToString = (value: string | null) => {
  if (value == null) {
    return '';
  }
  return value;
};
const ReserveFormContainer = () => {
  const { datas, setFun, isReservable } = useReservationForm();
  const [isModalOepn, setIsModalOpen] = useState(false);
  const { venueId } = useParams();

  const navigate = useNavigate();
  // const location = useLocation(); // location.state로 가게 이름받기
  console.log('location', location);
  const mutation = useMutation({
    mutationFn: ({ venueId, reservationData }: ReservatiomMutation) =>
      PostReservation(venueId, reservationData),
    onSuccess: ({ data }) => {
      setIsModalOpen(false);
      navigate('/user/reserve-success', {
        state: {
          reservationDate: data.result.reservationDate,
          reservationTime: data.result.reservationTime,
        },
      });
    },
    onError: () => {
      alert('서버와의 연결이 불안정합니다. 다시 시도해주세요.');
    },
  });

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

    mutation.mutate({ venueId, reservationData });
    setIsModalOpen(true);
  };
  return (
    <>
      <TopBar
        title="대관 신청"
        onFirstClick={() => {
          navigate(`/user/shop/${venueId}`);
        }}
      />
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
          <AlertOneButton
            onClick={handleSubmit}
            buttonMessage="확인했습니다."
            isLoading={mutation.isPending}
          >
            <ModalContents />
          </AlertOneButton>
        </ModalLayout>
      </div>
    </>
  );
};

export default ReserveFormContainer;

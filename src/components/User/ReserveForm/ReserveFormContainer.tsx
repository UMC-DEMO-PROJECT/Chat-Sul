import { useState } from 'react';
import Input from '../../../shared/ui/Input/Input';
import ModalLayout from '../../../shared/ui/Modal/ModalLayout/ModalLayout';
import TopBar from '../../../shared/ui/TopBar/TopBar';
import Button from '../../button';
import ViewOnlyInputContainer from './Input/ViewOnlyInputContainer';
import AlertOneButton from '../../../shared/ui/Modal/Alert/AlertOneButton';
import ModalContents from './ModalContents/ModalContents';
import { useNavigate } from 'react-router-dom';

const ReserveFormContainer = () => {
  const [isModalOepn, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleBackCilck = () => {
    // navigate(-1); // 가게화면으로 이동
  };

  return (
    <>
      <TopBar title="대관 신청" onFirstClick={handleBackCilck} />
      <div className=" flex flex-col px-6 my-6 gap-4">
        <Input
          value=""
          onChange={() => {}}
          title="예약자명"
          placeholder="예약자명을 입력해주세요"
        />
        <Input
          value=""
          onChange={() => {}}
          title="입금자명"
          placeholder="입금자명을 입력해주세요"
        />
        <Input
          value=""
          onChange={() => {}}
          title="전화번호"
          placeholder="전화번호를 입력해주세요"
        />
        <ViewOnlyInputContainer>
          <ViewOnlyInputContainer.Input
            title="예약일"
            value="2021-09-01"
            placeholder="예약일을 선택해주세요"
          />
          <ViewOnlyInputContainer.Calendar />
          {/* Calendar에 value랑 onClick 줘야함 value는 선택된 값(이미 다른유저가 선택한값) main에서 정보를 받아서 Calendar로 넘겨주는걸로하자.*/}
        </ViewOnlyInputContainer>
        <ViewOnlyInputContainer>
          <ViewOnlyInputContainer.Input
            title="예약시간"
            value="20시30분"
            placeholder="예약시간을 선택해주세요"
          />
          <ViewOnlyInputContainer.DropDown />
        </ViewOnlyInputContainer>
        <Input
          value=""
          onChange={() => {}}
          title="인원"
          placeholder="인원 수를 입력해주세요"
        />
        <Button
          onClick={() => {
            setIsModalOpen(true);
          }}
          size="large"
          colorType="filled"
        >
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

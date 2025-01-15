import { useState } from 'react';
import TopBar from '../TopBar/TopBar';
import ModalLayout from './ModalLayout/ModalLayout';
import TmpRentarCard from '../../../components/User/ReserveList/TmpRentarCard';
import AlertTwoButton from './Alert/AlertTwoButton';

const Example = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleCancel = () => {
    setIsOpen(false);
  };
  return (
    <>
      <TopBar title="대관확인" onFirstClick={() => {}} />
      <TmpRentarCard
        onClick={() => {
          setIsOpen(true);
        }}
      />
      <ModalLayout
        isOpen={isOpen}
        closeModal={() => {
          setIsOpen(false);
        }}
      >
        <AlertTwoButton
          onClick1={handleCancel}
          onClick2={handleClose}
          btnMessage1="돌아가기"
          btnMessage2="취소하기"
        >
          <p>정말로 예약을 취소하시겠습니까?</p>
        </AlertTwoButton>
      </ModalLayout>
    </>
  );
};

export default Example;

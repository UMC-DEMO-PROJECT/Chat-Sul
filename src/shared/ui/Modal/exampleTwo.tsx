import { useState } from 'react';
import TopBar from '../TopBar/TopBar';
import ModalLayout from './ModalLayout/ModalLayout';
import TmpRentarCard from '../../../components/User/ReserveList/TmpRentarCard';
import AlertTwoButton from './Alert/AlertTwoButton';
import Post from '../Post/Post';

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
      <Post title="야호" date="야호" isReceived={true} />
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
        <AlertTwoButton onCancel={handleCancel} onClose={handleClose}>
          <p>정말로 예약을 취소하시겠습니까?</p>
        </AlertTwoButton>
      </ModalLayout>
    </>
  );
};

export default Example;

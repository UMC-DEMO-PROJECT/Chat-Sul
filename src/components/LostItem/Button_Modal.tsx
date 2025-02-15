import { useState, useEffect, useRef } from 'react';
import Button from 'shared/ui/Button/button';
import { useNavigate } from 'react-router-dom';
import { PatchLostState } from 'shared/api/lost';
import { useOwnerContext } from '.././../context/OwnerContext';
import ModalLayout from '../../shared/ui/Modal/ModalLayout/ModalLayout';
import AlertTwoButton from '../../shared/ui/Modal/Alert/AlertTwoButton';

const ButtonModal = ({
  itemId,
  state,
}: {
  itemId: number;
  state: string | null;
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const { ownerId } = useOwnerContext();

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleModalItemStatusChange = async () => {
    try {
      setIsOpen(false);
      await PatchLostState({ venueId: ownerId, lostItemId: itemId });
      navigate('/owner/lost-list');
    } catch (error) {
      console.error('수취 변경 실패 : ', error);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      {state === 'FOUND' ? null : (
        <div className="w-[356px] mx-auto mt-[185px]">
          <Button
            size="large"
            colorType="filled"
            onClick={() => setIsOpen(true)}
          >
            수취 완료하기
          </Button>
        </div>
      )}
      {isOpen && (
        <ModalLayout
          isOpen={isOpen}
          closeModal={() => {
            setIsOpen(false);
          }}
        >
          <AlertTwoButton
            onClick1={handleClose}
            onClick2={handleModalItemStatusChange}
            btnMessage1="뒤로가기"
            btnMessage2="확인"
          >
            <p>분실물을 수취 완료 표시하시겠습니까까?</p>
          </AlertTwoButton>
        </ModalLayout>
      )}
    </>
  );
};
export default ButtonModal;

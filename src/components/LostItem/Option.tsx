import { useState, useEffect, useRef } from 'react';
import Icon from '../../shared/ui/Icon/Icon';
import ModalLayout from '../../shared/ui/Modal/ModalLayout/ModalLayout';
import AlertTwoButton from '../../shared/ui/Modal/Alert/AlertTwoButton';
import { useNavigate } from 'react-router-dom';
import { DeleteLost } from 'shared/api/lost';
import { useOwnerContext } from '../../context/OwnerContext';

const Option = ({ style, itemId }: { style?: string; itemId: number }) => {
  const [isClick, setIsClick] = useState(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const { ownerId } = useOwnerContext();

  const handleDeleteClick = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  const handleModalDeleteClick = async () => {
    try {
      setIsOpen(false);
      await DeleteLost({ venueId: ownerId, lostItemId: itemId });
      navigate('/owner/lost-list');
    } catch (error) {
      console.error('삭제 실패 : ', error);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsClick(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return (
    <div className={style}>
      <div
        onClick={() => setIsClick(true)}
        className="bg-transparent p-0 absolute top-[14px] right-[12px] cursor-pointer z-20"
      >
        <Icon name="Option" />
      </div>

      {isClick && (
        <div
          ref={ref}
          className="flex flex-col justify-center items-center gap-2 p-2 rounded-xl border-[0.2px] border-[rgba(208,208,208,0.43)] absolute top-[52px] right-[12px] bg-white"
        >
          <p
            onClick={() => navigate(`/owner/lost-modify/${itemId}`)}
            className="px-5 py-3 text-[15px] font-normal leading-[20px] tracking-[-0.23px] cursor-pointer"
          >
            수정
          </p>
          <p
            onClick={handleDeleteClick}
            className="px-5 py-3 text-[15px] font-normal leading-[20px] tracking-[-0.23px] cursor-pointer"
          >
            삭제
          </p>
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
            onClick2={handleModalDeleteClick}
            btnMessage1="뒤로가기"
            btnMessage2="삭제하기"
          >
            <p>정말로 글을 삭제하시겠습니까?</p>
          </AlertTwoButton>
        </ModalLayout>
      )}
    </div>
  );
};

export default Option;

import { ReactElement, useEffect, useRef } from 'react';
import AlertOneButton from '../Alert/AlertOneButton';
import AlertTwoButton from '../Alert/AlertTwoButton';

/**
 * Alert를 사용하기 위한 ModalLayout 컴포넌트입니다.
 * ModalLayout을 사용하기 위해서는 사용하려는 컴포넌트에서 isOpen과 setIsOpen을 state로 선언하고 사용해야 합니다.
 *
 * @param {ReactElement<typeof AlertOneButton> | ReactElement<typeof AlertTwoButton>} children - Layout을 구성할 Alert 컴포넌트
 * @param {boolean} isOpen - ModalLayout 렌더링 여부
 * @param {function} closeModal - Modal을 닫는 함수 ex) ()=>{setIsOpen(false)}
 */

interface ModalLayoutProps {
  children:
    | ReactElement<typeof AlertOneButton>
    | ReactElement<typeof AlertTwoButton>;
  isOpen: boolean;
  closeModal: () => void;
}

const ModalLayout = ({ children, isOpen, closeModal }: ModalLayoutProps) => {
  const modal = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen == true) {
      document.body.style.overflow = `hidden`;
    }
    return () => {
      document.body.style.overflow = `visible`;
    };
  }, [isOpen]);

  if (isOpen == false) {
    return null;
  }

  return (
    <div
      className="fixed z- top-0 left-0 h-full w-full flex justify-center items-center backdrop-blur-sm bg-[#0c0c0c]/50 "
      ref={modal}
      onClick={closeModal}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default ModalLayout;

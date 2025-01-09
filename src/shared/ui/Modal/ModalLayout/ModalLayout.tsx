import { ReactElement } from 'react';
import AlertOneButton from '../Alert/AlertOneButton';
import AlertTwoButton from '../Alert/AlertTwoButton';

/**
 *
 * Alert를 사용하기 위한 ModalLayout 컴포넌트입니다.
 *
 * @param {ReactElement<typeof AlertOneButton> | ReactElement<typeof AlertTwoButton>} children - Layout을 구성할 Alert 컴포넌트
 * @param {boolean} isOpen - ModalLayout 렌더링 여부
 */

interface ModalLayoutProps {
  children:
    | ReactElement<typeof AlertOneButton>
    | ReactElement<typeof AlertTwoButton>;
  isOpen: boolean;
}

const ModalLayout = ({ children, isOpen }: ModalLayoutProps) => {
  if (isOpen == false) {
    return null;
  }
  return (
    <div className="fixed top-0 left-0 h-full w-full flex justify-center items-center backdrop-blur-sm bg-[#0c0c0c]/50">
      {children}
    </div>
  );
};

export default ModalLayout;

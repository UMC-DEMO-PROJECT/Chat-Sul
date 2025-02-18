import Button from '../../Button/button';

/**
 * 버튼이 1개 있는 AlertOneButton 컴포넌트
 *
 * @param {function} onClick - 버튼 클릭시 실행할 함수
 * @param {React.ReactNode} children - Alert 창에 표시할 내용
 *
 */

interface AlertProps {
  onClick: () => void;
  children: React.ReactNode;
  buttonMessage: string;
}

const AlertOneButton = ({ onClick, children, buttonMessage }: AlertProps) => {
  return (
    <div className="w-[361px] min-h-[159px] py-6 bg-white rounded-xl flex-col justify-center items-center gap-9 inline-flex overflow-hidden">
      <div className="text-[#8e8e93] text-base font-normal leading-[21px]">
        {children}
      </div>
      <div className="w-full justify-start items-center gap-3 flex px-6">
        <div className="h-[54px] grow flex">
          <Button colorType="filled" size="large" onClick={onClick}>
            {buttonMessage}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AlertOneButton;

import Button from '../../Button/button';

/**
 * 버튼이 2개 있는 AlertTwoButton 컴포넌트
 *
 * @param {function} onClick1 - 첫번째 버튼 클릭시 실행할 함수
 * @param {function} onClick2 - 두번째 버튼 클릭시 실행할 함수
 * @param {React.ReactNode} children - Alert 창에 표시할 내용
 *
 */
interface AlertProps {
  onClick1: () => void;
  onClick2: () => void;
  children: React.ReactNode;
  btnMessage1: string;
  btnMessage2: string;
}

const AlertTwoButton = ({
  onClick1,
  children,
  onClick2,
  btnMessage1,
  btnMessage2,
}: AlertProps) => {
  return (
    <div className="w-[361px] min-h-[159px] p-6 bg-white rounded-xl flex-col justify-center items-center gap-9 inline-flex overflow-hidden">
      <div className="text-[#8e8e93] text-base font-normal leading-[21px]">
        {children}
      </div>
      <div className="w-full justify-start items-center gap-3 flex">
        <div className="h-[54px] grow">
          <Button colorType="tint" size="large" onClick={onClick1}>
            {btnMessage1}
          </Button>
        </div>
        <div className="h-[54px] grow">
          <Button colorType="filled" size="large" onClick={onClick2}>
            {btnMessage2}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AlertTwoButton;

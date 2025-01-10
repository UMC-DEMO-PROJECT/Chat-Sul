import Button from '../../../../components/button';

/**
 * 버튼이 2개 있는 AlertTwoButton 컴포넌트
 *
 * @param {function} onClose - 돌아가기 버튼 클릭시 실행할 함수
 * @param {function} onCancel - 취소하기 버튼 클릭시 실행할 함수
 * @param {React.ReactNode} children - Alert 창에 표시할 내용
 *
 */
interface AlertProps {
  onClose: () => void;
  onCancel: () => void;
  children: React.ReactNode;
}

const AlertTwoButton = ({ onClose, children, onCancel }: AlertProps) => {
  return (
    <div className="w-[361px] min-h-[159px] p-6 bg-white rounded-xl flex-col justify-center items-center gap-9 inline-flex overflow-hidden">
      <div className="text-[#8e8e93] text-base font-normal leading-[21px]">
        {children}
      </div>
      <div className="w-full justify-start items-center gap-3 flex">
        <div className="h-[54px] grow">
          <Button colorType="tint" size="large" onClick={onClose}>
            돌아가기
          </Button>
        </div>
        <div className="h-[54px] grow">
          <Button colorType="filled" size="large" onClick={onCancel}>
            취소하기
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AlertTwoButton;

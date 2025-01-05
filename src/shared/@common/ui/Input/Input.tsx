/**
 * Input 컴포넌트
 *
 * 사용자가 입력을 할 수 있는 Text Input Field Component입니다.
 *
 * @param {string} placeholder - 입력 필드에 표시될 자리표시 텍스트입니다.
 * @param {string} title - 입력 필드 위에 표시될 제목입니다.
 * @param {string} value = 입력 필드의 현재 값입니다.
 * @param {function} onChange - 입력 값이 변경될 때 호출되는 이벤트 핸들러입니다.
 * @param {'valid' | 'correct' | 'error' | 'invalid'} state - 입력 필드의 상태를 나타냅니다.
 *          - 'valid' : 입력 중인 상태, 검은 테두리
 *          - 'correct' : 입력이 올바른 상태일 경우 초록 테두리
 *          - 'error' : 입력이 올바르지 않은 상태일 경우 빨간 테두리
 *          - 'invalid' : 입력이 유효하지 않을 경우 검은 테두리
 */

interface InputProps {
  placeholder: string;
  title: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  state: 'valid' | 'correct' | 'error' | 'invalid';
  width: number;
}

const Input = ({
  placeholder,
  title,
  value,
  onChange,
  state,
  width,
}: InputProps) => {
  const InputState = {
    valid: 'border-black',
    correct: 'border-green-900',
    error: 'border-red-900',
    invalid: 'border-black',
  };

  return (
    <>
      <div className={`w-[${width}px] flex flex-col items-start`}>
        <div className="flex flex-col items-center px-4 py-0 gap-6">
          {title}
        </div>
        <input
          className={`flex relative items-center self-stretch py-4 pl-4 pr-5 bg-white ${InputState[state]} border-b-[0.6px] border-solid `}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
        <span className="absolute right-3">아이콘</span>
      </div>
    </>
  );
};

export default Input;

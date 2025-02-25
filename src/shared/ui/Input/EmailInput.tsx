/**
 * Email Input 컴포넌트
 *
 * 사용자가 입력을 할 수 있는 Text Input Field Component입니다.
 *
 * @param {string} placeholder - 입력 필드에 표시될 자리표시 텍스트입니다.
 * @param {string} title - 입력 필드 위에 표시될 제목입니다.
 * @param {string} value = 입력 필드의 현재 값입니다.
 * @param {function} onChange - 입력 값이 변경될 때 호출되는 이벤트 핸들러입니다.
 *          - 'valid' : 입력 중인 상태, 검은 테두리
 *          - 'correct' : 입력이 올바른 상태일 경우 초록 테두리
 *          - 'error' : 입력이 올바르지 않은 상태일 경우 빨간 테두리
 *          - 'invalid' : 입력이 유효하지 않을 경우 검은 테두리
 */

import {
  InputHTMLAttributes,
  PropsWithChildren,
  useEffect,
  useState,
} from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  title: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onIconStateChange?: (
    state: 'valid' | 'correct' | 'error' | 'invalid'
  ) => void;
  width?: string;
}

const EmailInput = ({
  placeholder,
  title,
  value,
  onChange,
  onIconStateChange,
  ...props
}: PropsWithChildren<InputProps>) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const [state, setState] = useState<'valid' | 'correct' | 'error' | 'invalid'>(
    'invalid'
  );
  const InputState = {
    valid: 'border-[#000000]',
    correct: 'border-[#34C759]',
    error: 'border-[#FF3B30]',
    invalid: 'border-[#000000]',
  };

  const IconState = {
    valid: 'none',
    correct: 'correct-icon',
    error: 'error-icon',
    invalid: 'none',
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    if (inputValue === '') {
      setState('invalid');
    } else if (emailRegex.test(inputValue)) {
      setState('correct');
    } else {
      setState('error');
    }

    onChange(e);
  };

  useEffect(() => {
    if (onIconStateChange) {
      onIconStateChange(state);
    }
  }, [state, onIconStateChange]);

  // IconState를 활용하여 Icon을 가져오면 됩니다. 예시: <Icon src={`${IconState}`} />

  return (
    <>
      <div className={` flex flex-col items-start w-[354px]`}>
        <div className="flex flex-col items-center px-4 py-0 gap-6 text-xs font-normal text-#3C3C4399">
          {title}
        </div>
        <div className="relative w-full">
          <input
            className={`flex w-full items-center self-stretch py-4 pl-4 pr-5 bg-white ${InputState[state]} border-b-[0.6px] border-solid text-[17px] focus:outline-none `}
            placeholder={placeholder}
            onChange={handleChange}
            value={value}
            {...props}
          />
          {IconState[state] !== 'none' && (
            <span className="absolute right-5 top-1/2 transform -translate-y-1/2">
              <img
                src={`/icons/${IconState[state]}.svg`}
                alt={state}
                className="w-5 h-5"
              />
            </span>
          )}
        </div>
      </div>
    </>
  );
};

export default EmailInput;

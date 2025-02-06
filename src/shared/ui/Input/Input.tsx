import { InputHTMLAttributes, PropsWithChildren } from 'react';

/**
 * Input 컴포넌트
 *
 * 사용자가 입력을 할 수 있는 Text Input Field Component입니다.
 *
 * @param {string} placeholder - 입력 필드에 표시될 자리표시 텍스트입니다.
 * @param {string} title - 입력 필드 위에 표시될 제목입니다.
 * @param {string} value = 입력 필드의 현재 값입니다.
 * @param {function} onChange - 입력 값이 변경될 때 호출되는 이벤트 핸들러입니다.
 */
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  title: string;
  value: string;
  width?: string;
}

const Input = ({
  placeholder,
  title,
  value,
  width = '354px',
  ...props
}: PropsWithChildren<InputProps>) => {
  // IconState를 활용하여 Icon을 가져오면 됩니다. 예시: <Icon src={`${IconState}`} />

  return (
    <>
      <div className={` flex flex-col items-start w-[${width}]`}>
        <div className="flex flex-col items-center px-4 py-0 gap-6 text-xs font-normal text-[#3C3C4399]">
          {title}
        </div>
        <div className="relative w-full">
          <input
            className={`flex w-full items-center self-stretch py-4 pl-4 pr-5 bg-white border-[#000000] border-b-[0.6px] border-solid text-[17px] focus:outline-none `}
            placeholder={placeholder}
            value={value}
            {...props}
          />
        </div>
      </div>
    </>
  );
};

export default Input;

import React, { InputHTMLAttributes, PropsWithChildren, useState } from 'react';
import Icon from '../Icon/Icon';

/**
 * AccountInput 컴포넌트
 *
 * 사용자가 계좌 입력을 할 수 있는 Text Input Field Component입니다.
 *
 * @param {string} placeholder - 입력 필드에 표시될 자리표시 텍스트입니다.
 * @param {string} title - 입력 필드 위에 표시될 제목입니다.
 * @param {string} value = 입력 필드의 현재 값입니다.
 * @param {function} onChange - 입력 값이 변경될 때 호출되는 이벤트 핸들러입니다.
 * @param {string[]} dropdownItems - 드롭다운 항목 배열
 * @param {function} onDropdownSelect - 드롭다운 항목 선택 시 호출되는 이벤트 핸들러입니다.
 */
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  title: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  width?: string;
  dropdownItems?: string[];
  onDropdownSelect?: (selectedItem: string) => void;
  selectedAccount: string;
}

const AccountInput = ({
  placeholder,
  title,
  value,
  onChange,
  width = '354px',
  dropdownItems = [],
  onDropdownSelect,
  selectedAccount,
  ...props
}: PropsWithChildren<InputProps>) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleDropdownSelect = (item: string) => {
    if (onDropdownSelect) {
      onDropdownSelect(item);
    }
    setIsDropdownOpen(false);
  };

  return (
    <div className={`flex flex-col items-start w-[${width}] z-20`}>
      <div className="flex flex-col items-center px-4 py-0 gap-6 text-xs font-normal text-[#3C3C4399]">
        {title}
      </div>
      <div className="relative items-center flex w-[354px] border-[#000000] border-b-[0.6px] border-solid">
        <button
          className="flex w-[87px] h-[54px] p-3 bg-white text-xs text-black justify-center items-center gap-3 cursor-pointer hover:border-none active:border-none focus:border-none"
          onClick={toggleDropdown}
        >
          {selectedAccount ? selectedAccount : '은행'}
          <Icon size={3} name="down" />
        </button>
        {isDropdownOpen && (
          <div className="absolute top-[103%] left-0 w-[87px] p-2 flex flex-col items-start gap-2 rounded-xl border-solid border-[#AEAEB2] background-[#FFF] bg-white border-[0.2px] shadow-lg z-10">
            {dropdownItems.map((item, index) => (
              <div
                key={index}
                className="px-4 py-3 text-[15px] tracking-[-0.23px] font-normal flex justify-center items-center gap-[10px] self-stretch rounded-lg hover:bg-[rgba(203,96,21,0.5)] cursor-pointer"
                onClick={() => handleDropdownSelect(item)}
              >
                {item}
              </div>
            ))}
          </div>
        )}
        <div className="w-[0.6px] h-[30px] bg-[#8E8E93]"></div>
        <input
          className={`flex w-[267px] items-center self-stretch py-4 pl-4 pr-5 bg-white text-[17px] focus:outline-none`}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          {...props}
        />
      </div>
    </div>
  );
};

export default AccountInput;

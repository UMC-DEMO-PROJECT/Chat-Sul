/**
 * Input 컴포넌트
 *
 * 사용자가 입력을 할 수 있는 Text Input Field Component입니다.
 *
 * @param {string} placeholder - 입력 필드에 표시될 자리표시 텍스트입니다.
 * @param {string} title - 입력 필드 위에 표시될 제목입니다.
 * @param {string} value = 입력 필드의 현재 값입니다.
 * @param {function} onChange - 입력 값이 변경될 때 호출되는 이벤트 핸들러입니다.
 * @param {string[]} dropdownItems - 드롭다운 항목 배열
 * @param {function} onDropdownSelect - 드롭다운 항목 선택 시 호출되는 이벤트 핸들러입니다.
 */

import React, { InputHTMLAttributes, PropsWithChildren, useState } from 'react';

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
    <div className={`flex flex-col items-start w-[${width}]`}>
      <div className="flex flex-col items-center px-4 py-0 gap-6 text-xs font-normal text-[#3C3C4399]">
        {title}
      </div>
      <div className="relative flex w-full">
        <button
          className="flex w-[87px] h-[54px] p-3 bg-white text-black justify-center items-center gap-3 cursor-pointer border border-gray-300"
          onClick={toggleDropdown}
        >
          {selectedAccount ? selectedAccount : '은행'}
        </button>
        {isDropdownOpen && (
          <div className="absolute top-full left-0 w-[73px] bg-white border border-gray-300 shadow-lg z-10">
            {dropdownItems.map((item, index) => (
              <div
                key={index}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleDropdownSelect(item)}
              >
                {item}
              </div>
            ))}
          </div>
        )}
        <input
          className={`flex w-full items-center self-stretch py-4 pl-4 pr-5 bg-white border-[#000000] border-b-[0.6px] border-solid text-[17px] focus:outline-none`}
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

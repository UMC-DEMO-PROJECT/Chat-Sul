import React, { useState } from "react";

// props의 타입 정의
interface DropDownProps {
  options: string[]; // 드롭다운 목록
  onSelect: (value: string) => void; // 선택된 값을 처리하는 함수
}

const DropDown: React.FC<DropDownProps> = ({ options, onSelect }) => {
  const [selected, setSelected] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelected(value);
    onSelect(value); // 선택된 값 처리
  };

  return (
    <select
      value={selected}
      onChange={handleChange}
      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
    >
      <option value="" disabled>
        선택해주세요
      </option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default DropDown;

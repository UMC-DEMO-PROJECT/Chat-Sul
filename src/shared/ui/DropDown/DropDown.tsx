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
    <select value={selected} onChange={handleChange} style={styles.select}>
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

const styles = {
  select: {
    padding: "7px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
};

export default DropDown;

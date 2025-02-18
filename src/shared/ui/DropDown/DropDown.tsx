import React, { useState } from 'react';

interface DropDownProps {
  options: string[]; 
  onSelect: (value: string) => void; 

const DropDown = ({ options, onSelect }: DropDownProps): JSX.Element => {
  const [selected, setSelected] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelected(value);
    onSelect(value);
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

import React, { useState } from 'react';
import Input from './Input';
import EmailInput from './EmailInput';
import PasswordCheckInput from './PasswordCheckInput';

const Example = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
  };

  return (
    <>
      <PasswordCheckInput
        placeholder="예시입니다"
        title="예시 Input"
        value={inputValue}
        onChange={handleInputChange}
        password="abc123"
      />
    </>
  );
};

export default Example;

import React, { useState } from 'react';
import Input from './Input';

const Example = () => {
  const [isValid, setIsValid] = useState<
    'valid' | 'correct' | 'error' | 'invalid'
  >('invalid');
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);

    if (value) {
      setIsValid('valid');
    } else {
      setIsValid('invalid');
    } // 조건에 따라 isValid의 값을 변경하면 됩니다.
  };

  return (
    <>
      <Input
        placeholder="예시입니다"
        title="예시 Input"
        value={inputValue}
        onChange={handleInputChange}
        state={isValid}
      />
    </>
  );
};

export default Example;

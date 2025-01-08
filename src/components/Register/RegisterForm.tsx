// import { useNavigate } from 'react-router-dom';
import EmailInput from '../../shared/ui/Input/EmailInput';
import Input from '../../shared/ui/Input/Input';
import PasswordCheckInput from '../../shared/ui/Input/PasswordCheckInput';
import Message from '../../shared/ui/Message/Message';
import Button from '../button';
import React, { useState } from 'react';

const RegisterForm = () => {
  // const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = {
      name: nameValue,
      phone: phoneValue,
      email: emailValue,
      password: passwordValue,
    };

    console.log(formData);
  };

  const [nameValue, setNameValue] = useState('');
  const [phoneValue, setPhoneValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [iconState, setIconState] = useState<
    'valid' | 'correct' | 'error' | 'invalid'
  >('invalid');
  const [passwordValue, setPasswordValue] = useState('');
  const [passwordCheckValue, setPasswordCheckValue] = useState('');
  const [isError, setIsError] = useState(false);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setNameValue(value);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPhoneValue(value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmailValue(value);
  };

  const handleIconStateChange = (
    state: 'valid' | 'correct' | 'error' | 'invalid'
  ) => {
    setIconState(state);
    console.log('아이콘 상태 변경:', state);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPasswordValue(value);
  };

  const handlePasswordCheckValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPasswordCheckValue(value);
  };

  const isButtonDisabled =
    !nameValue ||
    !phoneValue ||
    !emailValue ||
    !passwordValue ||
    !passwordCheckValue ||
    iconState != 'correct' ||
    passwordCheckValue != passwordValue;

  return (
    <form onSubmit={handleSubmit} className="flex flex-col mx-auto">
      <Input
        placeholder="이름을 입력해주세요."
        title="이름"
        value={nameValue}
        onChange={handleNameChange}
      />
      <Input
        placeholder="전화번호를 -없이 입력해주세요."
        title="전화번호"
        value={phoneValue}
        onChange={handlePhoneChange}
      />
      <EmailInput
        placeholder="이메일을 입력해주세요."
        title="이메일"
        value={emailValue}
        onChange={handleEmailChange}
        onIconStateChange={handleIconStateChange}
      />
      <Input
        placeholder="비밀번호를 입력해주세요."
        title="비밀번호"
        value={passwordValue}
        onChange={handlePasswordChange}
        type="password"
      />
      <PasswordCheckInput
        placeholder="비밀번호를 입력해주세요."
        title="비밀번호 확인"
        value={passwordCheckValue}
        onChange={handlePasswordCheckValue}
        password={passwordValue}
      />
      {isError ? (
        <Message text="이메일 혹은 비밀번호가 틀렸습니다." />
      ) : (
        <div className="h-[17px]"></div>
      )}
      <Button
        type="submit"
        size="large"
        colorType="filled"
        disabled={isButtonDisabled}
        customSize="disabled:bg-[#DEDEDE] disabled:text-[#A6A6A6]"
      >
        완료
      </Button>
    </form>
  );
};

export default RegisterForm;

/*
해야 할 일
password가 8자 이상으로 설정해야 하게 하기, passwordCheck도 마찬가지
전화번호는 10자리 이상으로 입력하게 하기
이름은 2자리 이상으로 입력하게 하기
자동완성 시에 흰색이 아니라 파란색으로 되는 거 어떻게 수정할 수 있는지 알아보기
*/

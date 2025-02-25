import { useNavigate } from 'react-router-dom';
import EmailInput from '../../shared/ui/Input/EmailInput';
import Input from '../../shared/ui/Input/Input';
import PasswordCheckInput from '../../shared/ui/Input/PasswordCheckInput';
import Button from '../../shared/ui/Button/button';
import React, { useState } from 'react';
import { PostRegister } from '../../shared/api/membersApi';

const RegisterForm = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = {
      name: nameValue,
      phoneNumber: phoneValue,
      email: emailValue,
      password: passwordValue,
    };

    try {
      await PostRegister(formData);
      navigate('/');
    } catch (error) {
      console.error('회원가입 실패', error);
    }
  };

  const [nameValue, setNameValue] = useState('');
  const [phoneValue, setPhoneValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [iconState, setIconState] = useState<
    'valid' | 'correct' | 'error' | 'invalid'
  >('invalid');
  const [passwordValue, setPasswordValue] = useState('');
  const [passwordCheckValue, setPasswordCheckValue] = useState('');

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
    nameValue.length < 2 ||
    phoneValue.length < 9 ||
    !emailValue ||
    passwordValue.length < 8 ||
    iconState != 'correct' ||
    passwordCheckValue != passwordValue;

  return (
    <form onSubmit={handleSubmit} className="flex flex-col mx-auto gap-6">
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
      <Button
        type="submit"
        size="large"
        colorType="filled"
        disabled={isButtonDisabled}
        customSize="disabled:bg-[#DEDEDE] disabled:text-[#A6A6A6] mt-[81px]"
      >
        완료
      </Button>
    </form>
  );
};

export default RegisterForm;

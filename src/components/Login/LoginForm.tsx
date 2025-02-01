import { useState } from 'react';
import Input from '../../shared/ui/Input/Input';
import Message from '../../shared/ui/Message/Message';
import { useNavigate } from 'react-router-dom';
import Button from '../../shared/ui/Button/button';
import EmailInput from '../../shared/ui/Input/EmailInput';
import { PostLogin } from '../../shared/api/membersApi';

const LoginForm = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = {
      email: emailValue,
      password: passwordValue,
    };
    setIsError(false);
    try {
      const response = await PostLogin(formData);
      const { accessToken } = response.result;

      localStorage.setItem('accessToken', accessToken);
      navigate('/user');
    } catch (error) {
      console.error('회원가입 실패', error);
    }
  };

  const [emailValue, setEmailValue] = useState('');

  const [passwordValue, setPasswordValue] = useState('');

  const [isError, setIsError] = useState(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmailValue(value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPasswordValue(value);
  };

  const isButtonDisabled = !emailValue || !passwordValue;

  const handleRegisterClick = () => {
    navigate('/register');
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col mx-auto ">
        <div className="flex flex-col items-start gap-[10px] mb-14">
          <EmailInput
            placeholder="이메일을 입력해주세요."
            title="이메일"
            value={emailValue}
            onChange={handleEmailChange}
          />
          <Input
            placeholder="비밀번호를 입력해주세요."
            title="비밀번호"
            value={passwordValue}
            onChange={handlePasswordChange}
            type="password"
          />
        </div>
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
          로그인
        </Button>
      </form>

      <div className="flex text-[11px] mt-4">
        <p className="text-[#8E8E93] text-[11px]"> 계정이 없으신가요? </p>
        <p
          onClick={handleRegisterClick}
          className="px-3 text-dongguk cursor-pointer font-semibold"
        >
          계정 만들기
        </p>
      </div>
    </>
  );
};
export default LoginForm;

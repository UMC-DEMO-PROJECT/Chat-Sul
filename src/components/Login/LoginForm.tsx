import { useState } from 'react';
import Input from '../../shared/ui/Input/Input';
import Message from '../../shared/ui/Message/Message';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const navigate = useNavigate();

  const [emailValue, setEmailValue] = useState('');
  const [emailState, setEmailState] = useState<
    'valid' | 'correct' | 'error' | 'invalid'
  >('invalid');
  const [passwordValue, setPasswordValue] = useState('');
  const [passwordState, setPasswordState] = useState<
    'valid' | 'correct' | 'error' | 'invalid'
  >('invalid');

  const [isError, setIsError] = useState(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmailValue(value);

    if (value) {
      setEmailState('valid');
    } else {
      setEmailState('invalid');
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPasswordValue(value);

    if (value) {
      setPasswordState('valid');
    } else {
      setPasswordState('invalid');
    }
  };

  const handleRegisterClick = () => {
    navigate('/register');
  };

  return (
    <>
      <Input
        placeholder="이메일을 입력해주세요."
        title="이메일"
        value={emailValue}
        onChange={handleEmailChange}
        state={emailState}
        width={'354'}
      />
      <Input
        placeholder="비밀번호를 입력해주세요."
        title="비밀번호"
        value={passwordValue}
        onChange={handlePasswordChange}
        state={passwordState}
        width={'354'}
      />
      {isError ? <Message text="이메일 혹은 비밀번호가 틀렸습니다." /> : <></>}
      {/* 로그인 Button */}
      <div className="flex text-[11px]">
        <p> 계정이 없으신가요? </p>
        <p
          onClick={handleRegisterClick}
          className="px-3 text-dongguk cursor-pointer"
        >
          계정 만들기
        </p>
      </div>
    </>
  );
};
export default LoginForm;

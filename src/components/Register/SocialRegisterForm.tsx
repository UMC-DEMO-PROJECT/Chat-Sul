import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PostSocialRegister } from 'shared/api/membersApi';
import Button from 'shared/ui/Button/button';
import Input from 'shared/ui/Input/Input';

const SocialRegisterForm = () => {
  const navigate = useNavigate();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = {
      name: nameValue,
      phoneNumber: phoneValue,
    };

    try {
      const response = await PostSocialRegister(formData);
      console.log(response);
      localStorage.setItem('role', 'USER');
      navigate('/user');
    } catch (error) {
      console.error('회원가입 실패', error);
    }
  };

  const [nameValue, setNameValue] = useState('');
  const [phoneValue, setPhoneValue] = useState('');

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setNameValue(value);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPhoneValue(value);
  };

  const isButtonDisabled = nameValue.length < 2 || phoneValue.length < 9;

  return (
    <form onSubmit={handleSubmit} className="h-full relative">
      <div className="flex w-[354px] flex-col justify-center items-center gap-16">
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
      </div>

      <Button
        type="submit"
        size="large"
        colorType="filled"
        disabled={isButtonDisabled}
        customSize="disabled:bg-[#DEDEDE] disabled:text-[#A6A6A6] absolute bottom-[36px] "
      >
        완료
      </Button>
    </form>
  );
};

export default SocialRegisterForm;

import SocialRegisterForm from 'components/Register/SocialRegisterForm';
import Title from 'shared/@common/Title';

const SocialRegister = () => {
  return (
    <div className="mb-[30px] h-[874px]">
      <div className="flex flex-col w-[354px] mx-6 mt-20 justify-center items-center h-full">
        <Title>계정 만들기</Title>
        <SocialRegisterForm />
      </div>
    </div>
  );
};

export default SocialRegister;

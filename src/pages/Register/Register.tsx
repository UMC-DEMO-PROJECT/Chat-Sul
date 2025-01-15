import RegisterForm from '../../components/Register/RegisterForm';
import Title from '../../shared/@common/Title';

const Register = () => {
  return (
    <div className="flex flex-col w-[354px] mx-6 mt-20 justify-center items-center">
      <Title>계정 만들기</Title>
      <RegisterForm />
    </div>
  );
};

export default Register;

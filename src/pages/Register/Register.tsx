import RegisterForm from '../../components/Register/RegisterForm';
import RegisterTitle from '../../components/Register/RegisterTitle';

const Register = () => {
  return (
    <div className="flex flex-col w-[354px] mx-6 mt-20 justify-center items-center">
      <RegisterTitle />
      <RegisterForm />
    </div>
  );
};

export default Register;

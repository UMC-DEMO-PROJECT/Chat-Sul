import LoginForm from '../../components/Login/LoginForm';
import SocialLogin from '../../components/Login/SocialLogin';

const Login = () => {
  return (
    <div className="flex flex-col justify-center items-center w-[356px] mx-auto mt-[120px]">
      <LoginForm />
      <SocialLogin />
    </div>
  );
};

export default Login;

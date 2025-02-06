import Icon from 'shared/ui/Icon/Icon';
import LoginForm from '../../components/Login/LoginForm';
import SocialLogin from '../../components/Login/SocialLogin';

const Login = () => {
  return (
    <>
      <div className="inline-flex items-center mt-[94px] mb-[44px] mx-[51px]">
        <Icon name="logo" />
        <div className="flex w-[176px] flex-col justify-center items-start gap-[2px]">
          <p className="self-stretch text-[#83786F] text-[15px]">
            술집 찾아주는 서비스
          </p>
          <p className="text-dongguk text-[34px] font-bold">찾술</p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-[356px] mx-auto">
        <LoginForm />
        <SocialLogin />
      </div>
    </>
  );
};

export default Login;

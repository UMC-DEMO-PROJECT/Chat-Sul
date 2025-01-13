import Button from '../button';

const SocialLogin = () => {
  const handleNaverLogin = () => {
    console.log('네이버 로그인 ㄱㄱ');
  };

  const handleKakaoLogin = () => {
    console.log('카카오 로그인 ㄱㄱ');
  };
  return (
    <div className="w-full">
      <div className="flex flex-col justify-center items-center my-14">
        <span className="w-[294px] h-[0.6px] rounded-[10px] bg-[#000]"></span>
      </div>
      <div className="flex flex-col gap-3">
        <Button size="large" colorType="naver" onClick={handleNaverLogin}>
          네이버로 시작하기
        </Button>
        <Button
          size="large"
          colorType="filled"
          onClick={handleKakaoLogin}
          customSize="bg-[#FDDC3F] text-[#3A2929]"
        >
          카카오로 시작하기
        </Button>
      </div>
    </div>
  );
};

export default SocialLogin;

import Icon from '../../shared/ui/Icon/Icon';
import Button from '../../shared/ui/Button/button';

const SocialLogin = () => {
  const handleNaverLogin = () => {
    console.log('네이버 로그인 ㄱㄱ');
    window.location.href = `${import.meta.env.VITE_API_URL}/oauth2/authorization/naver`;
  };

  const handleKakaoLogin = () => {
    console.log('카카오 로그인 ㄱㄱ');
    window.location.href = `${import.meta.env.VITE_API_URL}/oauth2/authorization/kakao`;
  };
  return (
    <div className="w-full">
      <div className="flex flex-col justify-center items-center my-14">
        <span className="w-[294px] h-[0.6px] rounded-[10px] bg-[#000]"></span>
      </div>
      <div className="flex flex-col gap-3">
        <div className="relative">
          <Button size="large" colorType="naver" onClick={handleNaverLogin}>
            네이버로 시작하기
          </Button>
          <div className="absolute left-[80px] top-[26%]">
            <Icon name="naver" />
          </div>
        </div>
        <div className="relative">
          <Button size="large" colorType="kakao" onClick={handleKakaoLogin}>
            카카오로 시작하기
          </Button>
          <div className="absolute left-[80px] top-[26%]">
            <Icon name="kakao" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialLogin;

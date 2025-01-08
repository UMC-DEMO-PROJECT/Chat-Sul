import Input from '../../../shared/ui/Input/Input';
import Button from '../button';

const LostWritingPage = () => {
  return (
    <div className="flex flex-col">
      <form className="flex flex-col g-[24px]">
        <Input
          placeholder="제목을 입력해주세요"
          title="제목"
          value={}
          onChange={}
        />
        <Button size="small" colorType="tint">
          이미지 추가하기
        </Button>
        <Input
          placeholder="분실물에 대한 설명입니다.
        언제, 어디서, 무엇을
        에 대해 자세하게 설명해주면 좋습니다."
          title="내용"
          value={}
          onChange={}
        />
      </form>

      <Button size="large" colorType="filled">
        작성완료
      </Button>
    </div>
  );
};

export default LostWritingPage;

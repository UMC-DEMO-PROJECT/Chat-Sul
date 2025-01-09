import Input from '../../shared/ui/Input/Input';
import { useState } from 'react';
import Button from '../button';

const WritingForm = () => {
  const [inputValue, setInputValue] = useState('');
  const [textareaValue, setTextareaValue] = useState('');

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = e.target.value;
    if (e.target.tagName === 'TEXTAREA') {
      setTextareaValue(value);
    } else {
      setInputValue(value);
    }
  };

  return (
    <>
      <form className="flex flex-col gap-[24px] w-[356px] mx-auto mt-[25px]">
        <Input
          placeholder="제목을 입력해주세요"
          title="제목"
          value={inputValue}
          onChange={handleInputChange}
        />
        <div className="w-[164px]">
          <Button size="small" colorType="tint">
            이미지 추가하기
          </Button>
        </div>

        <div className={` flex flex-col items-start w-[354px]`}>
          <div className="flex flex-col items-center px-4 py-0 gap-6 text-xs font-normal text-[#3C3C4399]">
            내용
          </div>
          <div className="relative w-full">
            <textarea
              className={`flex w-full h-[114px] items-center self-stretch py-4 pl-4 pr-5 bg-white border-[#000000] border-b-[0.6px] border-solid text-[17px] focus:outline-none placeholder:whitespace-pre-wrap`}
              placeholder={`분실물에 대한 설명입니다.\n'언제, 어디서, 무엇을'에 대해 \n자세하게 설명해주면 좋습니다.`}
              value={textareaValue}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default WritingForm;

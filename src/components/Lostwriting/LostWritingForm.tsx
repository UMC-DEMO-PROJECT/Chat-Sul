import Input from '../../shared/ui/Input/Input';
import { useState } from 'react';
import Button from '../../shared/ui/Button/button';
import { PostLost } from '../../shared/api/lost';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { TPostLost } from 'shared/type/LostType';
import FailedAPI from 'shared/ui/Fail/FailedAPI';
import { useOwnerContext } from '../../context/OwnerContext';

const WritingForm = () => {
  const [titleValue, setTitleValue] = useState('');
  const [imgValue, setImgValue] = useState<File | null>(null);
  const [textareaValue, setTextareaValue] = useState('');

  const { ownerId } = useOwnerContext();

  const navigate = useNavigate();
  const {
    mutate: postMutation,
    isError,
    isPending,
  } = useMutation({
    mutationFn: PostLost,
    onSuccess: () => {
      console.log('분실물 등록 성공');
      navigate('/owner/lost-list');
    },
    onError: (error) => {
      console.error('분실물 등록 실패: ', error);
    },
  });

  const handledSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formdata: TPostLost = {
      title: titleValue,
      itemImg: imgValue,
      description: textareaValue,
      venueId: ownerId,
    };

    console.log('제출할 데이터 : ', formdata);

    postMutation({ data: formdata });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const images = e.target.files[0];
      setImgValue(images);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = e.target.value;
    if (e.target.tagName === 'TEXTAREA') {
      setTextareaValue(value);
    } else {
      setTitleValue(value);
    }
  };

  const autoResize = (textarea: HTMLTextAreaElement) => {
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
    if (textarea.scrollHeight > 300) {
      textarea.style.height = '400px';
    }
  };

  const isButtonDisabled = titleValue && imgValue && textareaValue;

  if (isPending) {
    return <p>로딩중</p>;
  }
  if (isError) {
    return <FailedAPI text="등록에 실패하였습니다." />;
  }

  return (
    <>
      <form
        onSubmit={handledSubmit}
        className="flex flex-col gap-[24px] w-[356px] mx-auto mt-[73px]"
      >
        <Input
          placeholder="제목을 입력해주세요"
          title="제목"
          value={titleValue}
          onChange={handleInputChange}
        />
        <div className="w-[164px]">
          <input
            id="file"
            type="file"
            name="file"
            hidden
            onChange={handleFileChange}
          />
          <Button
            size="small"
            colorType="tint"
            onClick={(e) => {
              e.preventDefault();
              const fileInput = document.getElementById(
                'file'
              ) as HTMLInputElement | null;
              fileInput?.click();
            }}
          >
            이미지 추가하기
          </Button>
          {imgValue && (
            <div className="w-[356px] flex justify-center my-7">
              <img
                src={URL.createObjectURL(imgValue)}
                alt="Uploaded"
                className="w-[294px] object-cover rounded-lg"
              />
            </div>
          )}
        </div>

        <div className={` flex flex-col items-start w-[354px]`}>
          <div className="flex flex-col items-center px-4 py-0 gap-6 text-xs font-normal text-[#3C3C4399]">
            내용
          </div>
          <div className="relative w-full">
            <textarea
              className={`flex w-full h-[114px] items-center self-stretch py-4 pl-4 pr-5 bg-white border-[#000000] border-b-[0.6px] border-solid text-[17px] focus:outline-none placeholder:whitespace-pre-wrap overflow-hidden resize-none`}
              placeholder={`분실물에 대한 설명입니다.\n'언제, 어디서, 무엇을'에 대해 \n자세하게 설명해주면 좋습니다.`}
              value={textareaValue}
              onChange={handleInputChange}
              onInput={(e) => autoResize(e.target as HTMLTextAreaElement)}
            />
          </div>
        </div>
        <div className="w-[356px] mx-auto absolute top-[760px] left-[24px]">
          <Button
            size="large"
            colorType="filled"
            disabled={!isButtonDisabled}
            customSize="disabled:bg-[#DEDEDE] disabled:text-[#A6A6A6]"
          >
            작성완료
          </Button>
        </div>
      </form>
    </>
  );
};

export default WritingForm;

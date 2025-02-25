import Input from '../../shared/ui/Input/Input';
import { useState } from 'react';
import Button from '../../shared/ui/Button/button';
import { GetLostDetail_User, PatchUpdate } from '../../shared/api/lost';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { TPostLost } from 'shared/type/LostType';
import FailedAPI from 'shared/ui/Fail/FailedAPI';
import { useOwnerContext } from '../../context/OwnerContext';

const ModifyForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { ownerId } = useOwnerContext();
  const itemId = Number(id);

  const { mutate: PatchMutation, isError } = useMutation({
    mutationFn: PatchUpdate,
    onSuccess: () => {
      navigate(`/owner/lost-item/${itemId}`);
    },
    onError: (error) => {
      console.error('분실물 등록 실패: ', error);
    },
  });

  const { data: contents } = useQuery({
    queryFn: () => GetLostDetail_User({ venueId: ownerId, lostItemId: itemId }),
    queryKey: ['contents'],
  });

  const [titleValue, setTitleValue] = useState(contents?.result.title);
  const [imgValue, setImgValue] = useState<File | null>(null);
  const [textareaValue, setTextareaValue] = useState(
    contents?.result.description
  );

  const handledSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formdata: TPostLost = {
      title: titleValue,
      itemImg: imgValue,
      description: textareaValue,
      venueId: ownerId,
      lostItemId: itemId,
      foundDate: new Date().toISOString().split('T')[0],
    };

    PatchMutation({ data: formdata });
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

  const isButtonDisabled =
    (titleValue && textareaValue) ||
    (contents?.result.title && contents?.result.description);

  if (isError) {
    return <FailedAPI text="수정하는데 실패하였습니다." />;
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
          defaultValue={contents?.result.title}
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
          {imgValue ? (
            <div className="w-[356px] flex justify-center my-7">
              <img
                src={URL.createObjectURL(imgValue)}
                alt="Uploaded"
                className="w-[294px] rounded-lg object-cover"
              />
            </div>
          ) : contents?.result.itemImg.length > 0 ? (
            <div className="w-[356px] flex justify-center my-7">
              <img
                src={contents.result.itemImg}
                alt="Uploaded"
                className="w-[294px] rounded-lg object-cover"
              />
            </div>
          ) : null}
        </div>

        <div className={` flex flex-col items-start w-[354px]`}>
          <div className="flex flex-col items-center px-4 py-0 gap-6 text-xs font-normal text-[#3C3C4399]">
            내용
          </div>
          <div className="relative w-full">
            <textarea
              className={`flex w-full h-[114px] items-center self-stretch py-4 pl-4 pr-5 bg-white border-[#000000] border-b-[0.6px] border-solid text-[17px] focus:outline-none placeholder:whitespace-pre-wrap overflow-hidden resize-none`}
              placeholder={`분실물에 대한 설명입니다.\n'언제, 어디서, 무엇을'에 대해 \n자세하게 설명해주면 좋습니다.`}
              defaultValue={contents?.result.description}
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
            수정 완료
          </Button>
        </div>
      </form>
    </>
  );
};

export default ModifyForm;

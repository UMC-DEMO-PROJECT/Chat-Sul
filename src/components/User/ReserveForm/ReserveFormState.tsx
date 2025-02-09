import FailedAPI from 'shared/ui/Fail/FailedAPI';
import Button from 'shared/ui/Button/button';

type Mode = 'loading' | 'error' | 'success';

interface Props {
  mode: Mode;
  onRetry: () => void;
  subTitle?: string;
}

const ReserveFormState = ({ mode, onRetry, subTitle }: Props) => {
  if (mode === 'loading') {
    return (
      <div className="grid grid-rows-3 mt-[52px]">
        <div className="flex flex-col row-start-2">
          <div className="flex justify-center">
            <img src="/icons/spinner.svg" width={150} height={150} />
          </div>
        </div>
      </div>
    );
  }

  if (mode === 'error') {
    return (
      <div className="mt-[52px]">
        <div>
          <FailedAPI text="인터넷 연결이 끊어졌습니다." />
        </div>
        <div className="flex flex-col justify-end">
          <div className="mt-9 px-10">
            <Button size="small" colorType="unable" onClick={onRetry}>
              다시 신청하기
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-rows-3 mt-[52px]">
      <div className="flex flex-col row-start-2">
        <div className="flex justify-center">
          <img src="/icons/check-one.svg" />
        </div>
        <p className="text-center text-black text-[22px] font-bold leading-7 mt-6">
          예약이 완료되었습니다.
        </p>
        <p className="text-center text-[#8e8e93] text-xs font-normal leading-none">
          {subTitle}
        </p>
      </div>
    </div>
  );
};

export default ReserveFormState;

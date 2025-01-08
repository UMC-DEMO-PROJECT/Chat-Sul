import { useState } from 'react';
import TopBar from '../../../shared/ui/TopBar/TopBar';
import TmpRentarCard from './TmpRentarCard';
import Button from '../../button';
// 서버로 데이터 요청해서 상태에 따라 RentarCard에 (확정, 실패, 대기 중)
// 데이터 요청을 어떻게 할지는 고민중
const ReserveListContainer = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <TopBar title="대관확인" onFirstClick={() => {}} />
      <TmpRentarCard
        onClick={() => {
          setIsOpen(true);
        }}
      />
      {isOpen ? (
        <div className="fixed top-0 left-0 h-full w-full flex justify-center items-center backdrop-blur-sm bg-[#0c0c0c]/50">
          <div className="w-[361px] h-[159px] p-6 bg-white rounded-xl flex-col justify-center items-center gap-9 inline-flex overflow-hidden">
            <div className="text-[#8e8e93] text-base font-normal leading-[21px]">
              정말로 예약을 취소하시겠습니까?
            </div>
            <div className="w-full justify-start items-center gap-3 flex">
              <div className="h-[54px] w-100% grow">
                <Button
                  colorType="tint"
                  size="large"
                  onClick={() => {
                    setIsOpen(false);
                  }}
                >
                  돌아가기
                </Button>
              </div>
              <div className="h-[54px] w-100% grow">
                <Button colorType="filled" size="large">
                  취소하기
                </Button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ReserveListContainer;

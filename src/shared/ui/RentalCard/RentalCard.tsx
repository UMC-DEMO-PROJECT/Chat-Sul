interface RentalCardProps {
  onClick?: () => void;
  shopName: string;
  personCount: number;
  status: 'confirmed' | 'failed' | 'pending';
}
const textStyle = {
  confirmed: 'text-[#34c759]',
  failed: 'text-[#ff3b30]',
  pending: 'text-sul-gray-400',
};
const textContents = {
  confirmed: '확정',
  failed: '실패',
  pending: '대기중',
};

const RentalCard = ({
  onClick,
  shopName,
  personCount,
  status,
}: RentalCardProps) => {
  // Date는 어떻게 서버에서 들어올지에 따라 처리방법이 달라질듯
  return (
    <div
      className=" h-28 px-4 py-3 bg-white border-b border-[#8e8e93] flex-col flex justify-start items-start gap-1 overflow-hidden"
      onClick={onClick}
    >
      <div className="self-stretch text-black text-[17px] font-['SF Pro'] leading-snug">
        {shopName}
      </div>
      <div className="flex justify-start items-center gap-1">
        <div className="w-4 h-4 overflow-hidden">
          <img src="/icons/calendar.svg" alt="calendar" />
        </div>
        <div className="text-[#2d2d2d] text-[13px] font-normal font-['SF Pro'] leading-[18px]">
          2024년 12월 20일(금) 20시 30분
        </div>
      </div>
      <div className="flex justify-start items-center gap-1">
        <div className="w-4 h-4 overflow-hidden">
          <img src="/icons/person.svg" alt="person" />
        </div>
        <div className="text-[#2d2d2d] text-[13px] font-normal font-['SF Pro'] leading-[18px]">
          {personCount}
        </div>
      </div>
      <div
        className={`${textStyle[status]} text-[13px] font-normal font-['SF Pro'] leading-[18px]`}
      >
        {textContents[status]}
      </div>
    </div>
  );
};

export default RentalCard;

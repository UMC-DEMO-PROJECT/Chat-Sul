interface RentalCardProps {
  onClick?: () => void;
  shopName: string;
  personCount: number;
  status: 'confirmed' | 'watingConfirmation' | 'waitingDeposit' | 'cancelled';
  disabled?: boolean;
}
const textStyle = {
  cancelled: 'text-[#ff3b30]',
  pending: 'text-sul-gray-400',
  confirmed: 'text-[#34c759]',
  watingConfirmation: 'text-sul-gray-400',
  waitingDeposit: 'text-sul-gray-400',
};
const textContents = {
  confirmed: '확정',
  cancelled: '실패',
  pending: '대기중',
  watingConfirmation: '확정 대기',
  waitingDeposit: '입금 대기',
};

const RentalCard = ({
  onClick,
  shopName,
  personCount,
  status,
  disabled,
}: RentalCardProps) => {
  // Date는 어떻게 서버에서 들어올지에 따라 처리방법이 달라질듯
  return (
    <button
      className={`w-full h-28 px-4 py-3 bg-white border-b border-[#8e8e93] flex-col flex justify-start items-start gap-1 overflow-hidden ${disabled ? null : `cursor-pointer`}`}
      onClick={onClick}
      disabled={disabled}
    >
      <div className=" text-black text-[17px] leading-snug">{shopName}</div>
      <div className="flex justify-start items-center gap-1">
        <div className="w-4 h-4 overflow-hidden">
          <img src="/icons/calendar.svg" alt="calendar" />
        </div>
        <div className="text-[#2d2d2d] text-[13px] font-normal leading-[18px]">
          2024년 12월 20일(금) 20시 30분
        </div>
      </div>
      <div className="flex justify-start items-center gap-1">
        <div className="w-4 h-4 overflow-hidden">
          <img src="/icons/person.svg" alt="person" />
        </div>
        <div className="text-[#2d2d2d] text-[13px] font-normal leading-[18px]">
          {personCount}
        </div>
      </div>
      <div
        className={`${textStyle[status]} text-[13px] font-normal font-['SF Pro'] leading-[18px]`}
      >
        {textContents[status]}
      </div>
    </button>
  );
};

export default RentalCard;

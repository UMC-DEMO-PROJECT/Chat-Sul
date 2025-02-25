import dateToformattedKorean from '../../../utils/dateToFormattedKorean';

interface RentalCardProps {
  onClick?: () => void;
  Name: string;
  numberOfGuests: number;
  reservationDate: string;
  reservationTime: string;
  status:
    | 'CONFIRMED'
    | 'WAITING_CONFIRMATION'
    | 'WAITING_DEPOSIT'
    | 'CANCELLED';
  isUser: boolean;
  disabled?: boolean;
  onCancel?: () => void;
}

const textStyle = {
  CANCELLED: 'text-[#ff3b30]',
  CONFIRMED: 'text-[#34c759]',
  WAITING_CONFIRMATION: 'text-sul-gray-400',
  WAITING_DEPOSIT: 'text-sul-gray-400',
};

const textContents = {
  CONFIRMED: '확정',
  CANCELLED: '실패',
  WAITING_CONFIRMATION: '확정 대기',
  WAITING_DEPOSIT: '입금 대기',
};

const RentalCard = ({
  onClick,
  onCancel,
  Name,
  numberOfGuests,
  reservationDate,
  reservationTime,
  status,
  disabled,
  isUser,
}: RentalCardProps) => {
  const DateToFormattedKorean = dateToformattedKorean(
    reservationDate,
    reservationTime
  );
  return (
    <div className="w-full h-28 px-4 py-3 bg-white border-b border-[#8e8e93] flex">
      <button
        className={`flex-col flex justify-start items-start gap-1 overflow-hidden ${disabled ? null : `cursor-pointer`}`}
        onClick={onClick}
        disabled={disabled}
      >
        <div className=" text-black text-[17px] leading-snug">{Name}</div>
        <div className="flex justify-start items-center gap-1">
          <div className="w-4 h-4 overflow-hidden">
            <img src="/icons/calendar.svg" alt="calendar" />
          </div>
          <div className="text-[#2d2d2d] text-[13px] font-normal leading-[18px]">
            {DateToFormattedKorean}
          </div>
        </div>
        <div className="flex justify-start items-center gap-1">
          <div className="w-4 h-4 overflow-hidden">
            <img src="/icons/person.svg" alt="person" />
          </div>
          <div className="text-[#2d2d2d] text-[13px] font-normal leading-[18px]">
            {numberOfGuests}
          </div>
        </div>
        <div
          className={`${textStyle[status]} text-[13px] font-normal font-['SF Pro'] leading-[18px]`}
        >
          {textContents[status]}
        </div>
      </button>
      {isUser && status != 'CANCELLED' && (
        <div className="flex flex-1 justify-end items-center">
          <button onClick={onCancel}>
            <img src={'/icons/cancel.svg'} />
          </button>
        </div>
      )}
    </div>
  );
};

export default RentalCard;

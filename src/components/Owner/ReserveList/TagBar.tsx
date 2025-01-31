import { TMenuStatus } from './types/dataTypes';

interface TagBarProps {
  status: TMenuStatus;
  setStatus: React.Dispatch<React.SetStateAction<TMenuStatus>>;
}
interface tabsProps {
  label: string;
  value: TMenuStatus;
}
const TagBar = ({ status, setStatus }: TagBarProps) => {
  const tabs: tabsProps[] = [
    { label: '모두', value: 'ALL' },
    { label: '확정', value: 'CONFIRMED' },
    { label: '입금 대기', value: 'WAITING_DEPOSIT' },
    { label: '확정 대기', value: 'WAITING_CONFIRMATION' },
  ];

  return (
    <div className="w-[402px] h-[52px] justify-center items-center gap-5 inline-flex">
      {tabs.map((tab) => {
        const isActive = status === tab.value;

        return (
          <div
            key={tab.value}
            onClick={() => setStatus(tab.value)}
            className={`px-4 py-[15px] flex justify-center items-center gap-2.5 overflow-hidden cursor-pointer
              ${
                isActive
                  ? 'border-b-2 border-black text-black'
                  : 'text-[#8e8e93]'
              }
            `}
          >
            <div className="text-[17px] font-['SF Pro'] leading-snug">
              {tab.label}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TagBar;

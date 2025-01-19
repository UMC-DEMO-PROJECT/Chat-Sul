import { DataTypeInView } from './types/dataTypes';

interface TagBarProps {
  status: DataTypeInView;
  setStatus: React.Dispatch<React.SetStateAction<DataTypeInView>>;
}
interface tabsProps {
  label: string;
  value: DataTypeInView;
}
const TagBar = ({ status, setStatus }: TagBarProps) => {
  const tabs: tabsProps[] = [
    { label: '모두', value: 'all' },
    { label: '확정', value: 'confirmed' },
    { label: '입금 대기', value: 'waitingDeposit' },
    { label: '확정 대기', value: 'watingConfirmation' },
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

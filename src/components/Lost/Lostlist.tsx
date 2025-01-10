import LostListData from './mock/LostListData';
import { useNavigate } from 'react-router-dom';

interface ILostItem {
  id: number;
  title: string;
  date: string;
  state: string;
}

const LostList = ({ searchValue }: { searchValue: string | null }) => {
  const navigate = useNavigate();
  const handleClick = (id: number) => {
    navigate(`/user/lost-item/${id}`);
  };

  return (
    <div className="flex flex-col">
      {LostListData.filter((lost: ILostItem) =>
        searchValue ? lost.title.includes(searchValue) : true
      ).map((lost: ILostItem) => {
        return (
          <div
            key={lost.id}
            onClick={() => handleClick(lost.id)}
            className="flex justify-between w-[354px] p-3 border-b-[0.2px] border-[#D1D1D6]"
          >
            <p className="font-sans text-[17px] font-[590]">{lost.title}</p>
            <div className="flex items-center gap-2">
              <p className="font-sans font-normal text-[13px] text-[#8E8E93]">
                {lost.date}
              </p>
              {lost.state === '미수취' ? (
                <p className="font-sans font-normal text-[11px] text-[#FF3B30]">
                  {lost.state}
                </p>
              ) : (
                <p className="font-sans font-normal text-[11px] text-[#34C759]">
                  {lost.state}
                </p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default LostList;

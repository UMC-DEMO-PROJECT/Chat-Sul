import LostListData from 'shared/api/mock/LostListData';
import Post from 'shared/ui/Post/Post';
import { useNavigate } from 'react-router-dom';
import Icon from 'shared/ui/Icon/Icon';

interface ILostItem {
  id: number;
  title: string;
  date: string;
  state: boolean;
}

const LostList = ({
  who,
  searchValue,
}: {
  who: string;
  searchValue: string | null;
}) => {
  const navigate = useNavigate();
  const handleClick = (id: number) => {
    navigate(`/${who}/lost-item/${id}`);
  };

  const filteredLostList = LostListData.filter((lost: ILostItem) =>
    searchValue
      ? lost.title.toLowerCase().includes(searchValue.toLowerCase())
      : true
  );
  return (
    <div className="flex flex-col mt-3">
      {filteredLostList.length > 0 ? (
        filteredLostList.map((lost: ILostItem) => {
          return (
            <Post
              key={lost.id}
              title={lost.title}
              onClick={() => {
                handleClick(lost.id);
              }}
              date={lost.date}
              isReceived={lost.state}
            />
          );
        })
      ) : (
        <div className="flex flex-col items-center gap-4 mt-[209px]">
          <Icon name="Exclamation" />
          <p className="text-[#8E8E93] text-[17px] font-[590]">
            검색된 분실물이 없습니다.
          </p>
        </div>
      )}
    </div>
  );
};

export default LostList;

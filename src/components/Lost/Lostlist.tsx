import LostListData from '../../shared/api/mock/LostListData';
import Post from '../../shared/ui/Post/Post';
import { useNavigate } from 'react-router-dom';

interface ILostItem {
  id: number;
  title: string;
  date: string;
  state: boolean;
}

const LostList = ({ searchValue }: { searchValue: string | null }) => {
  const navigate = useNavigate();
  const handleClick = (id: number) => {
    navigate(`/user/lost-item/${id}`);
  };

  return (
    <div className="flex flex-col">
      {LostListData.filter((lost: ILostItem) =>
        searchValue
          ? lost.title.toLowerCase().includes(searchValue.toLowerCase())
          : true
      ).map((lost: ILostItem) => {
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
      })}
    </div>
  );
};

export default LostList;

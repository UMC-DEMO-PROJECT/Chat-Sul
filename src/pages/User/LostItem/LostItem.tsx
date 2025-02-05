import TopBar from '../../../shared/ui/TopBar/TopBar';
import LostItem from '../../../components/LostItem/LostItem';
import { useNavigate } from 'react-router-dom';

const LostItemPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center h-full relative">
      <TopBar
        title="분실물"
        onSecondClick={() => navigate('/user/lost-list')}
      />
      <div className="mt-[73px]">
        <LostItem />
      </div>
    </div>
  );
};

export default LostItemPage;

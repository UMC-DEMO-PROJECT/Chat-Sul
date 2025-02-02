import TopBar from '../../../shared/ui/TopBar/TopBar';
import LostItem from '../../../components/LostItem/LostItem';
import { useNavigate } from 'react-router-dom';

const LostItemPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <TopBar
        title="분실물"
        onSecondClick={() => navigate('/user/lost-list')}
      />
      <div className="mt-[25px]">
        <LostItem />
      </div>
    </div>
  );
};

export default LostItemPage;

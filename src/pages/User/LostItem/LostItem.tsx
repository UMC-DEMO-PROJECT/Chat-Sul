import TopBar from '../../../shared/ui/TopBar/TopBar';
import LostItem from '../../../components/LostItem/user/LostItem';
import { useNavigate, useParams } from 'react-router-dom';

const LostItemPage = () => {
  const navigate = useNavigate();
  const { venueId } = useParams();
  const id = Number(venueId);
  return (
    <div className="flex flex-col items-center h-full relative">
      <TopBar
        title="분실물"
        onSecondClick={() => navigate(`/user/shop/${id}/lost-list`)}
      />
      <div className="mt-[73px]">
        <LostItem />
      </div>
    </div>
  );
};

export default LostItemPage;

import TopBar from '../../../shared/ui/TopBar/TopBar';
import LostItem from '../../../components/LostItem/LostItem';
import { useNavigate, useParams } from 'react-router-dom';
import Option from '../../../components/LostItem/Option';

const LostItemPage_Owner = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const itemId = Number(id);
  return (
    <div className="relative">
      <TopBar
        title="분실물"
        onFirstClick={() => navigate('/owner/lost-list')}
        onSecondClick={() => navigate('/owner/lost-list')}
      />
      <Option id={itemId} />
      <div className="mt-[25px]">
        <LostItem />
      </div>
    </div>
  );
};

export default LostItemPage_Owner;

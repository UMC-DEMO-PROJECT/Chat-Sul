import TopBar from '../../../shared/ui/TopBar/TopBar';
import LostItem from '../../../components/LostItem/LostItem';
import { useNavigate } from 'react-router-dom';
import Option from '../../../components/LostItem/Option';

const LostItemPage_Owner = () => {
  const navigate = useNavigate();
  return (
    <div className="relative">
      <TopBar
        title="분실물"
        onFirstClick={() => navigate('/owner/lost-list')}
        onSecondClick={() => navigate('/owner/lost-list')}
      />
      <Option style="" />
      <div className="mt-[25px]">
        <LostItem />
      </div>
    </div>
  );
};

export default LostItemPage_Owner;

import TopBar from '../../../shared/ui/TopBar/TopBar';
import LostItem from '../../../components/LostItem/LostItem';
import { useNavigate, useParams } from 'react-router-dom';
import Option from '../../../components/LostItem/Option';
import ButtonModal from 'components/LostItem/Button_Modal';

const LostItemPage_Owner = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const itemId = Number(id);

  return (
    <div className="flex flex-col items-center h-full relative">
      <TopBar
        title="분실물"
        onSecondClick={() => navigate('/owner/lost-list')}
      />
      <div className="mt-[52px]">
        <Option itemId={itemId} />
        <div className="mt-[25px]">
          <LostItem />
          <ButtonModal itemId={itemId} />
        </div>
      </div>
    </div>
  );
};

export default LostItemPage_Owner;

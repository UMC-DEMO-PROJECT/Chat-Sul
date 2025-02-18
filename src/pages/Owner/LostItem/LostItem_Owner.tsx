import TopBar from '../../../shared/ui/TopBar/TopBar';
import LostItem from '../../../components/LostItem/owner/LostItem';
import { useNavigate, useParams } from 'react-router-dom';
import Option from '../../../components/LostItem/Option';
import ButtonModal from 'components/LostItem/Button_Modal';
import { ItemStateProvider } from './context/LostItemStateContext';
import { useItemStateContext } from '../../../pages/Owner/LostItem/context/LostItemStateContext';

const LostItemPage_Owner = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const itemId = Number(id);
  const { itemState } = useItemStateContext();

  return (
    <div className="flex flex-col items-center h-full relative">
      <TopBar
        title="분실물"
        onFirstClick={() => navigate('/owner/lost-list')}
        onSecondClick={() => navigate('/owner/lost-list')}
      />
      <div className="mt-[52px]">
        <Option itemId={itemId} />
        <div className="mt-[25px]">
          <LostItem />
          <ButtonModal itemId={itemId} state={itemState} />
        </div>
      </div>
    </div>
  );
};

const LostItemPage_Owner_Container = () => {
  return (
    <ItemStateProvider>
      <LostItemPage_Owner />
    </ItemStateProvider>
  );
};

export default LostItemPage_Owner_Container;

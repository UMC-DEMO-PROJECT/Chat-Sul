import TopBar from '../../../shared/ui/TopBar/TopBar';
import LostItem from '../../../components/LostItem/LostItem';
import { useNavigate, useParams } from 'react-router-dom';
import Option from '../../../components/LostItem/Option';
import Button from 'shared/ui/Button/button';
import { PatchLostState } from 'shared/api/lost';
import { useOwnerContext } from '../../../context/OwnerContext';

const LostItemPage_Owner = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const itemId = Number(id);
  const { ownerId } = useOwnerContext();
  const handleItemStatusChange = async () => {
    try {
      await PatchLostState({ venueId: ownerId, lostItemId: itemId });
      navigate('/owner/lost-list');
    } catch (error) {
      console.log('수취 변경 실패 : ', error);
    }
  };
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
          <div className="w-[356px] mx-auto mt-[185px]">
            <Button
              size="large"
              colorType="filled"
              onClick={handleItemStatusChange}
            >
              수취 완료하기
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LostItemPage_Owner;

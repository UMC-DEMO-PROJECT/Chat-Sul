import TopBar from '../../../shared/ui/TopBar/TopBar';
import LostItem from '../../../components/LostItem/LostItem';
import { useNavigate, useParams } from 'react-router-dom';
import Option from '../../../components/LostItem/Option';
import Button from 'shared/ui/Button/button';

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
          <div className="w-[356px] mx-auto absolute top-[760px] left-[24px]">
            <Button
              size="large"
              colorType="filled"
              onClick={() => navigate('/owner/lost-list')}
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

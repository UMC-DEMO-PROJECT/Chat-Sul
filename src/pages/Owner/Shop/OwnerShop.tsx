import ShoppingCard from 'components/User/Shop/shoppingCard';
import { useNavigate } from 'react-router-dom';
import TopBar from 'shared/ui/TopBar/TopBar';

const OwnerShop = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate('/user');
  };
  return (
    <>
      <TopBar title="내 가게" onFirstClick={handleBack} />
      <div className="flex items-center justify-center h-full">
        <div className="flex px-[54px] flex-col justify-center items-center gap-10">
          <ShoppingCard
            icon="lostlist"
            titleP="분실물 등록"
            descriptionP="잃어버린 물건, 찾기 쉽게!"
            navigation="/owner/lost-list"
          />
          <ShoppingCard
            icon="reserve"
            titleP="대관 확인"
            descriptionP="간편한 예약 확인"
            navigation="/owner/reserve-list"
          />
          <ShoppingCard
            icon="menu"
            titleP="메뉴판"
            descriptionP="한눈에, 빠르게"
            navigation="/owner/menu"
          />
        </div>
      </div>
    </>
  );
};

export default OwnerShop;

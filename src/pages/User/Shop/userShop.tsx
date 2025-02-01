import ShoppingCard from 'components/User/Shop/shoppingCard';
import { useNavigate } from 'react-router-dom';
import TopBar from 'shared/ui/TopBar/TopBar';

const UserShop = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <>
      <TopBar title="시오" onFirstClick={handleBack} />
      <div className="flex px-[54px] pt-[64px] flex-col items-start gap-10">
        <ShoppingCard
          icon="lostlist"
          titleP="분실물 찾기"
          descriptionP="잃어버린 물건, 쉽게 찾아요!"
          navigation="/user/lost-list"
        />
        <ShoppingCard
          icon="menu"
          titleP="메뉴판"
          descriptionP="메뉴 고민? 한눈에 해결!"
          navigation="/user/menu"
        />
        <ShoppingCard
          icon="reserve"
          titleP="대관 신청"
          descriptionP="특별한 날, 간편히 대관하세요!"
          navigation="/user/reserve-form/:id"
        />
        <ShoppingCard
          icon="checked"
          titleP="대관 확인"
          descriptionP="대관 내역을 확인하세요!"
          navigation="/user/reserve-list"
        />
      </div>
    </>
  );
};

export default UserShop;

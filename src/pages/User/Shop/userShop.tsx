import { useQuery } from '@tanstack/react-query';
import ShoppingCard from 'components/User/Shop/shoppingCard';
import { useNavigate, useParams } from 'react-router-dom';
import { GetVenue } from 'shared/api/venue';
import TopBar from 'shared/ui/TopBar/TopBar';

const UserShop = () => {
  const { venueId } = useParams();
  const id = Number(venueId);
  const navigate = useNavigate();
  const handleBack = () => {
    navigate('/user');
  };

  const { data: venue } = useQuery({
    queryFn: () => GetVenue(id),
    queryKey: ['venueData'],
  });

  return (
    <>
      <TopBar title={venue?.result.name} onFirstClick={handleBack} />
      <div className="flex px-[54px] pt-[64px] flex-col items-start gap-10 mt-[52px]">
        <ShoppingCard
          icon="lostlist"
          titleP="분실물 찾기"
          descriptionP="잃어버린 물건, 쉽게 찾아요!"
          navigation={`lost-list`}
        />
        <ShoppingCard
          icon="menu"
          titleP="메뉴판"
          descriptionP="메뉴 고민? 한눈에 해결!"
          navigation={`menu`}
        />
        <ShoppingCard
          icon="reserve"
          titleP="대관 신청"
          descriptionP="특별한 날, 간편히 대관하세요!"
          navigation={`reserve-form/:id`}
        />
        <ShoppingCard
          icon="checked"
          titleP="대관 확인"
          descriptionP="대관 내역을 확인하세요!"
          navigation={`reserve-list`}
        />
      </div>
    </>
  );
};

export default UserShop;

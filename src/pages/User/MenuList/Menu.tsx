import UserMenu from 'components/User/Menu/userMenu';
import { useParams } from 'react-router-dom';
import TopBar from 'shared/ui/TopBar/TopBar';

const Menu = () => {
  const { venueId } = useParams();
  const id = Number(venueId);
  return (
    <>
      <TopBar title="메뉴판" />
      <UserMenu venueId={id} />
    </>
  );
};

export default Menu;

/**
 *
 * User의 메뉴 페이지.
 * 메뉴 페이지에는 GET 요청을 이용해서 메뉴 이미지를 받아와서 출력하면 된다.
 * GET을 해서 하나 하나씩 띄우는 것이 중요할 듯.
 * 각 이미지마다 살짝 간격을 둘 것.
 */

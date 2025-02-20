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

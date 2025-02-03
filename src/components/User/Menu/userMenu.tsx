import { useEffect, useState } from 'react';
import { GetMenu } from 'shared/api/menu';

interface MenuItem {
  menuId: number;
  imageUrl: string;
}

const UserMenu = ({ venueId }: { venueId: number }) => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const data = await GetMenu(venueId);
        setMenuItems(data.result.menuImageList);
      } catch (error) {
        console.error('메뉴 가져오기 오류', error);
      }
    };

    fetchMenu();
  }, [venueId]);
  return (
    <div className="flex flex-col items-center max-w-[402px]">
      {menuItems.map((item) => (
        <img key={item.menuId} src={item.imageUrl} alt="메뉴 이미지" />
      ))}
    </div>
  );
};

export default UserMenu;

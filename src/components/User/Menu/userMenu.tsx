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
    <div className="flex flex-col items-center max-w-[402px] mt-[52px]">
      {menuItems.length > 0 ? (
        menuItems.map((item) => (
          <img
            key={item.menuId}
            src={item.imageUrl}
            alt="메뉴 이미지"
            className="w-full"
          />
        ))
      ) : (
        <div className="flex flex-col items-center gap-4 mt-[300px]">
          <p className="text-[#8E8E93] text-[17px] font-[590]">
            아직 메뉴판이 올라오지 않았어요.
          </p>
        </div>
      )}
    </div>
  );
};

export default UserMenu;

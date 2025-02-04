import UploadingMenu from 'components/Owner/Menu/uploadingMenu';
import TopBar from 'shared/ui/TopBar/TopBar';

const MenuOwner = () => {
  return (
    <>
      <TopBar title="메뉴판" />
      <UploadingMenu />
    </>
  );
};

export default MenuOwner;

/**
 * 사장님의 메뉴판 페이지에서는
 * 메뉴 이미지를 추가할 수 있는 버튼이 존재하고,
 * 메뉴 이미지가 추가 되면 그 이미지가 한 줄에 두 개씩 떠야 한다.
 * 그 이미지 우측 상단에는 x 표시가 존재하고, 수정 완료 버튼이 밑에 있다.
 * 무한 스크롤보다는 그냥 가지고 있는 메뉴 이미지를 한 번에 다 출력하는 것이 좋을 것 같다.
 */

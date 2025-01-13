import { useLocation, useNavigate } from 'react-router-dom';
import TopBar from '../../../shared/ui/TopBar/TopBar';

// 가게 ID, 이름은 Context API를 이용하는게 좋겠다.
// props drilling을 피하고
const ReserveFormContainer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBackCilck = () => {
    navigate(-1); // 가게화면으로 이동
  };

  return (
    <>
      <TopBar title="대관 신청" onFirstClick={handleBackCilck} />
    </>
  );
};

export default ReserveFormContainer;

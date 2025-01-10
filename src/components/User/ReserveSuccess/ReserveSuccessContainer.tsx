// import { useNavigate } from 'react-router-dom';
import TopBar from '../../../shared/ui/TopBar/TopBar';
import SuccessMessage from './SuccessMessage';

// onFirstClick에서 버튼을 누르면 대관확인 페이지로 이동
const ReserveSuccessMain = () => {
  // const navigate = useNavigate();

  return (
    <>
      <TopBar title="시오" onFirstClick={() => {}} />
      <div className="grid grid-rows-3">
        <SuccessMessage />
      </div>
    </>
  );
};

export default ReserveSuccessMain;

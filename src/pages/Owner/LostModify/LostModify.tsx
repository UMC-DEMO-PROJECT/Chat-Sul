import TopBar from '../../../shared/ui/TopBar/TopBar';
import ModifyForm from 'components/LostModify/LostModifyForm';
import Button from '../../../shared/ui/Button/button';
import { useNavigate, useParams } from 'react-router-dom';

const LostModifyPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const itemId = Number(id);

  return (
    <div className="flex flex-col relative">
      <TopBar
        title="분실물"
        onFirstClick={() => navigate(`/owner/lost-item/${itemId}`)}
        onSecondClick={() => navigate('/owner/lost-list')}
      />
      <ModifyForm />
      <div className="w-[356px] mx-auto absolute top-[760px] left-[24px]">
        <Button size="large" colorType="filled">
          수정완료
        </Button>
      </div>
    </div>
  );
};

export default LostModifyPage;

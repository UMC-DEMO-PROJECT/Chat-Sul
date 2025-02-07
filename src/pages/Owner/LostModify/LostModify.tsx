import TopBar from '../../../shared/ui/TopBar/TopBar';
import ModifyForm from 'components/LostModify/LostModifyForm';
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
    </div>
  );
};

export default LostModifyPage;

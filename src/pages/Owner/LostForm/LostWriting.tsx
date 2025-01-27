import TopBar from '../../../shared/ui/TopBar/TopBar';
import WritingForm from '../../../components/Lostwriting/LostWritingForm';
import { useNavigate } from 'react-router-dom';

const LostWritingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col relative">
      <TopBar
        title="분실물"
        onFirstClick={() => navigate('/owner/lost-list')}
        onSecondClick={() => navigate('/owner/lost-list')}
      />
      <WritingForm />
    </div>
  );
};

export default LostWritingPage;

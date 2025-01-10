import TopBar from '../../../shared/ui/TopBar/TopBar';
import WritingForm from '../../../components/Lostwriting/LostWritingForm';
import Button from '../../../components/button';
import { useNavigate } from 'react-router-dom';

const LostWritingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col relative">
      <TopBar
        title="분실물"
        onFirstClick={() => navigate('/')}
        onSecondClick={() => navigate('/user/lost-list')}
      />
      <WritingForm />
      <div className="w-[356px] mx-auto absolute top-[760px] left-[24px]">
        <Button size="large" colorType="filled">
          작성완료
        </Button>
      </div>
    </div>
  );
};

export default LostWritingPage;

import TopBar from '../../../shared/ui/TopBar/TopBar';
import WritingForm from '../../../components/Lostwriting/LostWritingForm';
import Button from '../../../components/button';
import { useNavigate } from 'react-router-dom';

const LostWritingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col w-[356px] mx-auto relative">
      <TopBar
        title="분실물"
        onFirstClick={() => navigate('/')}
        onSecondClick={() => navigate('/user/lost-list')}
      />
      <WritingForm />
      <Button size="large" colorType="filled" customSize="absolute top-[759px]">
        작성완료
      </Button>
    </div>
  );
};

export default LostWritingPage;

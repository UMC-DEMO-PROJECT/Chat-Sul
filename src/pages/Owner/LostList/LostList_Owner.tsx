import LostList from '../../../components/Lost/Lostlist';
import TopBar from '../../../shared/ui/TopBar/TopBar';
import { useNavigate } from 'react-router-dom';
import LostInput from '../../../components/Lost/LostInput';
import { useState } from 'react';
import useDebounce from '../../../hooks/useDebounce';
import Icon from '../../../shared/ui/Icon/Icon';

const LostListPage_Owner = () => {
  const navigate = useNavigate();
  const [mq, setMq] = useState('');
  const useDebouncedValue = useDebounce(mq, 500);

  return (
    <div className="flex flex-col items-center h-full relative">
      <TopBar
        title="분실물"
        onFirstClick={() => navigate('/')}
        onSecondClick={() => navigate('/user/lost-list')}
      />
      <div className="flex flex-col justify-center items-center mt-[25px] ">
        <LostInput setSearchValue={setMq} />
        <LostList who="owner" searchValue={useDebouncedValue} />
      </div>
      <button
        onClick={() => navigate('/owner/lost-form')}
        className="rounded-full bg-[#CB6015] p-4 absolute bottom-[72px] right-[16px]"
      >
        <Icon name="pen" />
      </button>
    </div>
  );
};

export default LostListPage_Owner;

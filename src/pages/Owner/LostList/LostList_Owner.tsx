import LostList from '../../../components/Lost/owner/Lostlist';
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
    <div className="flex flex-col items-center justify-between h-full relative">
      <TopBar
        title="분실물"
        onFirstClick={() => navigate('/owner')}
        onSecondClick={() => navigate('/owner/lost-list')}
      />
      <div className="flex flex-col justify-center items-center mt-[73px] ">
        <LostInput setSearchValue={setMq} />
        <LostList searchValue={useDebouncedValue} />
      </div>
      <div className="flex justify-between w-full pl-[325px] sticky bottom-[72px]">
        <button
          onClick={() => navigate('/owner/lost-form')}
          className="rounded-full bg-[#CB6015] p-4"
        >
          <Icon name="pen" />
        </button>
      </div>
    </div>
  );
};

export default LostListPage_Owner;

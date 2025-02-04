import LostList from 'components/Lost/Lostlist';
import TopBar from 'shared/ui/TopBar/TopBar';
import { useNavigate, useParams } from 'react-router-dom';
import LostInput from 'components/Lost/LostInput';
import { useState } from 'react';
import useDebounce from 'hooks/useDebounce';

const LostListPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const venueId = Number(id);
  const [mq, setMq] = useState('');
  const useDebouncedValue = useDebounce(mq, 500);

  return (
    <div className="flex flex-col items-center h-full relative">
      <TopBar
        title="분실물"
        onFirstClick={() => navigate(`/user/shop/${venueId}`)}
        onSecondClick={() => navigate(`/user/shop/${venueId}/lost-list`)}
      />
      <div className="flex flex-col justify-center items-center mt-[73px] ">
        <LostInput setSearchValue={setMq} />
        <LostList who="user" searchValue={useDebouncedValue} />
      </div>
    </div>
  );
};

export default LostListPage;

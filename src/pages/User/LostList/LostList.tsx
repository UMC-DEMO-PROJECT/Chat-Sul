import TopBar from 'shared/ui/TopBar/TopBar';
import { useNavigate, useParams } from 'react-router-dom';
import LostInput from 'components/Lost/LostInput';
import { useState } from 'react';
import useDebounce from 'hooks/useDebounce';
import LostList_user from 'components/Lost/user/Lostlist_user';
import { GetVenue } from 'shared/api/venue';
import { useQuery } from '@tanstack/react-query';

const LostListPage = () => {
  const navigate = useNavigate();
  const { venueId } = useParams();
  const id = Number(venueId);
  const [mq, setMq] = useState('');
  const useDebouncedValue = useDebounce(mq, 500);

  const { data: venue } = useQuery({
    queryFn: () => GetVenue(id),
    queryKey: ['venueData'],
  });

  return (
    <div className="flex flex-col items-center h-full relative">
      <TopBar
        title={venue?.result.name}
        onFirstClick={() => navigate(`/user/shop/${id}`)}
        onSecondClick={() => navigate(`/user/shop/${id}/lost-list`)}
      />
      <div className="flex flex-col justify-center items-center mt-[73px] ">
        <LostInput setSearchValue={setMq} />
        <LostList_user who="user" searchValue={useDebouncedValue} />
      </div>
    </div>
  );
};

export default LostListPage;

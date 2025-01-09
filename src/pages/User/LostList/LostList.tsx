import { useState, ChangeEvent } from 'react';
import { useSearchParams } from 'react-router-dom';
import LostList from '../../../components/Lost/Lostlist';
import Input from '../../../shared/ui/Input/Input';
import TopBar from '../../../shared/ui/TopBar/TopBar';
import { useNavigate } from 'react-router-dom';

const LostListPage = () => {
  const navigate = useNavigate();

  const [searchValue, setSearchValue] = useState('');

  const onChangeSearchValue = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };
  const [searchParams] = useSearchParams({
    mq: '',
  });
  const mq = searchParams.get('mq');
  return (
    <div className="flex flex-col justify-center items-center ">
      <TopBar
        title="분실물"
        onFirstClick={() => navigate('/')}
        onSecondClick={() => navigate('/user/lost-list')}
      />
      <Input
        placeholder="검색어를 입력해주세요"
        title="검색"
        value={searchValue}
        onChange={onChangeSearchValue}
      />
      <LostList searchValue={mq} />
    </div>
  );
};

export default LostListPage;

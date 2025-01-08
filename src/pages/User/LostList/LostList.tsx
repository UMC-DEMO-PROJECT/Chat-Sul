import { useState, ChangeEvent } from 'react';
import { useSearchParams } from 'react-router-dom';
import LostList from '../../../components/Lost/Lostlist';
import Input from '../../../shared/ui/Input/Input';

const LostListPage = () => {
  const [searchValue, setSearchValue] = useState('');

  const onChangeSearchValue = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };
  const [searchParams] = useSearchParams({
    mq: '',
  });
  const mq = searchParams.get('mq');
  return (
    <div className="flex flex-col">
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

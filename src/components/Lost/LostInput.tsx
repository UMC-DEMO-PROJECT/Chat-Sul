import Input from '../../shared/ui/Input/Input';
import { ChangeEvent, KeyboardEvent } from 'react';
import { useSearchParams } from 'react-router-dom';
import Icon from '../../shared/ui/Icon/Icon';

const LostInput = ({
  setSearchValue,
}: {
  setSearchValue: (value: string) => void;
}) => {
  const onChangeSearchValue = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setSearchValue(newValue);
    setSearchParams({ mq: newValue });
  };
  const handleSearchWithKeyboard = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      executeSearch(mq);
    }
  };
  const handleSearchButtonClick = () => {
    executeSearch(mq);
  };
  const executeSearch = (searchValue: string) => {
    console.log('Searching for:', searchValue);
  };

  const [searchParams, setSearchParams] = useSearchParams({
    mq: '',
  });
  const mq = searchParams.get('mq') ?? '';
  return (
    <div className="flex w-full relative">
      <Input
        placeholder="검색어를 입력해주세요"
        title="검색"
        value={mq}
        onChange={onChangeSearchValue}
        onKeyDown={handleSearchWithKeyboard}
      />
      <button
        onClick={handleSearchButtonClick}
        className="p-0 absolute top-[34px] right-[10px] bg-transparent"
      >
        <Icon name="Search" />
      </button>
    </div>
  );
};

export default LostInput;

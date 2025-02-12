import Input from 'shared/ui/Input/Input';
import Icon from 'shared/ui/Icon/Icon';
import { ChangeEvent, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const LostInput = ({
  setSearchValue,
}: {
  setSearchValue: (value: string) => void;
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [inputValue, setInputValue] = useState(searchParams.get('mq') ?? '');

  useEffect(() => {
    setSearchParams({ mq: inputValue });
    setSearchValue(inputValue);
  }, [inputValue, setSearchParams, setInputValue]);

  const onChangeSearchValue = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="flex w-full relative">
      <Input
        placeholder="검색어를 입력해주세요"
        title="검색"
        value={inputValue}
        onChange={onChangeSearchValue}
      />
      <div className="p-0 absolute top-[34px] right-[10px] bg-transparent cursor-pointer">
        <Icon name="Search" />
      </div>
    </div>
  );
};

export default LostInput;

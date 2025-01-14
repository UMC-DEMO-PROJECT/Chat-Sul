import Input from '../../shared/ui/Input/Input';
import { ChangeEvent } from 'react';
import { useSearchParams } from 'react-router-dom';

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
  const [searchParams, setSearchParams] = useSearchParams({
    mq: '',
  });
  const mq = searchParams.get('mq') ?? '';
  return (
    <Input
      placeholder="검색어를 입력해주세요"
      title="검색"
      value={mq}
      onChange={onChangeSearchValue}
      width="w-[380px]"
    />
  );
};

export default LostInput;

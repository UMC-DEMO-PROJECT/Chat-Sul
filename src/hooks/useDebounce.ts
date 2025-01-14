import { useEffect, useState } from 'react';

//value: 원본 값
//delay: 값이 변경된 후 적용되기까지 대기할 시간간

const useDebounce = (value: string, delay: number) => {
  const [debouncedValue, setDebounceValue] = useState(value);
  useEffect(() => {
    //지연 시간 후에 원본값을 최신 value로 업데이트
    const timer = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => {
      //이전에 사용한 타이머 삭제
      clearTimeout(timer);
    };
  }, [delay, value]);

  return debouncedValue;
};
export default useDebounce;

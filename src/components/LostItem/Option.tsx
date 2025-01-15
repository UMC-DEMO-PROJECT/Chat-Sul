import { useState, useEffect, useRef } from 'react';
import Icon from '../../shared/ui/Icon/Icon';

const Option = ({ style }: { style: string }) => {
  const [isClick, setIsClick] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsClick(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return (
    <div className={style}>
      <div
        onClick={() => setIsClick(true)}
        className="bg-transparent p-0 absolute top-[14px] right-[12px] cursor-pointer"
      >
        <Icon name="Option" />
      </div>

      {isClick && (
        <div
          ref={ref}
          className="flex flex-col justify-center items-center gap-2 p-2 rounded-xl border-[0.2px] border-[rgba(208,208,208,0.43)] absolute top-[52px] right-[12px]"
        >
          <p className="px-5 py-3 text-[15px] font-normal leading-[20px] tracking-[-0.23px]">
            수정
          </p>
          <p className="px-5 py-3 text-[15px] font-normal leading-[20px] tracking-[-0.23px]">
            삭제
          </p>
        </div>
      )}
    </div>
  );
};

export default Option;

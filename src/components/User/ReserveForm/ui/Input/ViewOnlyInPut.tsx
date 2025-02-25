import { useContext } from 'react';
import { ViewOnlyInputContext } from './ViewOnlyInputContainer';

interface ViewOnlyInPutProps {
  placeholder: string;
  title: string;
  value: string | null;
}

const ViewOnlyInPut = ({ placeholder, title, value }: ViewOnlyInPutProps) => {
  const { isOpen, handleIsOpen } = useContext(ViewOnlyInputContext)!;

  return (
    <div
      className={`flex flex-col items-start w-[354px]`}
      onClick={handleIsOpen}
    >
      <div className="flex flex-col items-center px-4 py-0 gap-6 text-xs font-normal text-[#3C3C4399]">
        {title}
      </div>
      <div className="w-full flex justify-between py-4 pl-4 pr-5 bg-white border-[#000000] border-b-[0.6px] border-solid text-[17px] focus:outline-none">
        <p
          className={`w-full bg-white ${value ? `text-black` : `text-sul-gray-400`} cursor-default`}
        >
          {value || placeholder}
        </p>
        <img
          src="/icons/down.svg"
          alt="down"
          className={`transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </div>
    </div>
  );
};

export default ViewOnlyInPut;

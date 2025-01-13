interface ViewOnlyInPutProps {
  placeholder: string;
  title: string;
  value: string;
}

const ViewOnlyInPut = ({ placeholder, title, value }: ViewOnlyInPutProps) => {
  return (
    <div className={`flex flex-col items-start w-[354px]`}>
      <div className="flex flex-col items-center px-4 py-0 gap-6 text-xs font-normal text-[#3C3C4399]">
        {title}
      </div>
      <div className="relative w-full">
        <input
          className={`flex w-full items-center self-stretch py-4 pl-4 pr-5 bg-white border-[#000000] border-b-[0.6px] border-solid text-[17px] focus:outline-none `}
          placeholder={placeholder}
          value={value}
          disabled
        />
      </div>
    </div>
  );
};

export default ViewOnlyInPut;

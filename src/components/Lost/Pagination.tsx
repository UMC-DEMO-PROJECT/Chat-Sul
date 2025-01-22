import Icon from 'shared/ui/Icon/Icon';

const Pagination = () => {
  return (
    <div className="flex justify-center items-center gap-4 w-[380px] px-4">
      <div>
        <Icon name="left" />
      </div>
      <p className="w-6 y-6 px-[9px] rounded-full bg-black text-[#ffffff]">1</p>
      <div>
        <Icon name="right" />
      </div>
    </div>
  );
};

export default Pagination;

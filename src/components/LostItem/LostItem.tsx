import { useParams } from 'react-router-dom';
import LostItemData from '../../shared/api/mock/LostItemData';

type TLostItem = {
  id: number;
  title: string;
  date: string;
  state: string;
  name: string;
  imgUrl: string;
  content: string;
};

const LostItem = () => {
  const { id } = useParams();
  const ItemId = Number(id);
  const item = LostItemData.find((item: TLostItem) => item.id === ItemId);

  return (
    <div className="flex flex-col">
      <p className="font-sans text-[28px] font-bold leading-[34px] tracking-[0.38px] text-left">
        {item?.title}
      </p>
      <p className="font-sans text-[13px] font-normal leading-[18px] tracking-[-0.08px] text-left">
        {item?.name}
      </p>
      <p className="font-sans text-[13px] font-normal leading-[18px] tracking-[-0.08px] text-left">
        {item?.date}
      </p>
      <p className="font-sans text-[13px] font-normal leading-[18px] tracking-[-0.08px] text-left">
        {item?.state}
      </p>
      <p className="w-[294px] h-[233px] rounded-lg">{item?.imgUrl}</p>
      <p className="font-sans text-[17px] font-normal leading-[22px] tracking-[-0.43px] text-left">
        {item?.content}
      </p>
    </div>
  );
};

export default LostItem;

import { useParams } from 'react-router-dom';
import LostItemData from '../../shared/api/mock/LostItemData';
// import { useQuery } from '@tanstack/react-query';
// import { GetLostDetail } from 'shared/api/lost';

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

  // const {
  //   data: item,
  //   isPending,
  //   isError,
  // } = useQuery({
  //   queryFn: () => GetLostDetail(ItemId),
  //   queryKey: ['contents', ItemId],
  // });

  // if (isPending) {
  //   return <p>로딩중</p>;
  // }
  // if (isError) {
  //   return <p>에러</p>;
  // }

  return (
    <div className="flex flex-col gap-4 w-[300px] mx-auto">
      <div className="flex flex-col gap-[2px]">
        <p className="text-[28px] font-bold leading-[34px] tracking-[0.38px] text-left">
          {item?.title}
        </p>
        <p className="text-[13px] font-normal leading-[18px] tracking-[-0.08px] text-left text-[#CB6015]">
          {item?.name}
        </p>
        <p className="text-[13px] font-normal leading-[18px] tracking-[-0.08px] text-left">
          {item?.date}
        </p>
        <p className="text-[13px] font-normal leading-[18px] tracking-[-0.08px] text-left text-[#8E8E93]">
          {item?.state}
        </p>
      </div>

      <img className="w-[294px] rounded-lg" src={item?.imgUrl} />
      <p className="text-[17px] font-normal leading-[22px] tracking-[-0.43px] text-left text-[#939393]">
        {item?.content.split('\n').map((line, index) => (
          <p key={index}>
            {line}
            <br />
          </p>
        ))}
      </p>
    </div>
  );
};

export default LostItem;

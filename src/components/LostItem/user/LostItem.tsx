import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { GetLostDetail_User } from 'shared/api/lost';
import FailedAPI from 'shared/ui/Fail/FailedAPI';

const LostItem = () => {
  const { venueId, id } = useParams();
  const VenueId = Number(venueId);
  const ItemId = Number(id);

  const {
    data: item,
    isPending,
    isError,
  } = useQuery({
    queryFn: () => GetLostDetail_User({ venueId: VenueId, lostItemId: ItemId }),
    queryKey: ['contents', ItemId],
  });

  if (isPending) {
    return <p>로딩중</p>;
  }
  if (isError) {
    return <FailedAPI text="상세 페이지를 불러오는데 실패했습니다." />;
  }

  return (
    <div className="flex flex-col gap-4 w-[300px] min-h-[500px] mx-auto">
      <div className="flex flex-col gap-[2px]">
        <p className="text-[28px] font-bold leading-[34px] tracking-[0.38px] text-left">
          {item?.result?.title}
        </p>
        <p className="text-[13px] font-normal leading-[18px] tracking-[-0.08px] text-left text-[#CB6015]">
          {item?.result?.venueName}
        </p>
        <p className="text-[13px] font-normal leading-[18px] tracking-[-0.08px] text-left">
          {item?.result?.foundDate}
        </p>
        {item?.result?.lostItemStatus === 'LOST' ? (
          <p className="text-[13px] font-normal leading-[18px] tracking-[-0.08px] text-left text-[#8E8E93]">
            미수취
          </p>
        ) : (
          <p className="text-[13px] font-normal leading-[18px] tracking-[-0.08px] text-left text-[#8E8E93]">
            수취 완료
          </p>
        )}
      </div>
      {item?.result?.itemImg?.[0] ? (
        <img
          className="w-[294px] rounded-lg"
          src={`${item?.result?.itemImg}`}
        />
      ) : (
        <></>
      )}

      <p className="text-[17px] font-normal leading-[22px] tracking-[-0.43px] text-left text-[#939393]">
        {item?.result?.description}
      </p>
    </div>
  );
};

export default LostItem;

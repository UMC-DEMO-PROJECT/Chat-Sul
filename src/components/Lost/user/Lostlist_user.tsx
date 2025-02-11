import Post from 'shared/ui/Post/Post';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetInfiniteLostList } from 'hooks/useGetInfiniteLostList';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import SearchLostList from '../SearchLostList';
import { ILostItem } from 'shared/type/LostType';
import FailedAPI from 'shared/ui/Fail/FailedAPI';

const LostList_user = ({
  who,
  searchValue,
}: {
  who: string;
  searchValue: string | null;
}) => {
  const navigate = useNavigate();
  const handleClick = (id: number) => {
    navigate(`/${who}/shop/${venueId}/lost-item/${id}`);
  };

  const { venueId } = useParams();
  const id = Number(venueId);

  const { data, isPending, isError, isFetching, hasNextPage, fetchNextPage } =
    useGetInfiniteLostList({ venueId: id });

  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (inView && !isFetching && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, isFetching, hasNextPage, fetchNextPage]);

  if (isPending) {
    return <p>로딩중</p>;
  }
  if (isError) {
    return <FailedAPI text="분실물 목록을 불러오는데 실패했습니다." />;
  }

  const lostItems = data.pages.flatMap(
    (page) => page.result.lostItemPreViewDTOList
  );

  return (
    <div className="flex flex-col mt-3">
      {searchValue ? (
        <SearchLostList who={who} venueId={id} text={searchValue} />
      ) : lostItems.length > 0 ? (
        data.pages.map((page) =>
          page?.result.lostItemPreViewDTOList.map((lost: ILostItem) => (
            <Post
              key={lost.lostItemId}
              title={lost.title}
              content={lost.description}
              onClick={() => {
                handleClick(lost.lostItemId);
              }}
              date={lost.foundDate}
              isReceived={lost.lostItemStatus}
            />
          ))
        )
      ) : (
        <div className="flex flex-col items-center gap-4 mt-[209px]">
          <p className="text-[#8E8E93] text-[17px] font-[590]">
            아직 분실물 글이 올라오지 않았어요.
          </p>
        </div>
      )}

      <div ref={ref}>{isFetching && <p>loading..</p>}</div>
    </div>
  );
};

export default LostList_user;

import Post from 'shared/ui/Post/Post';
import { useNavigate } from 'react-router-dom';
import Icon from 'shared/ui/Icon/Icon';
import { useGetSearchInfiniteLostList } from 'hooks/useGetSearchInfiniteLostList';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { ILostItem } from 'shared/type/LostType';

const SearchLostList = ({
  who,
  venueId,
  text,
}: {
  who: string;
  venueId: number;
  text: string;
}) => {
  const navigate = useNavigate();
  const handleClick = (id: number) => {
    navigate(`/${who}/shop/${venueId}/lost-item/${id}`);
  };

  const { data, isPending, isError, isFetching, hasNextPage, fetchNextPage } =
    useGetSearchInfiniteLostList({ venueId, text });

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
    return (
      <div className="flex flex-col items-center gap-4 mt-[209px]">
        <Icon name="Exclamation" />
        <p className="text-[#8E8E93] text-[17px] font-[590]">
          검색된 분실물이 없습니다.
        </p>
      </div>
    );
  }

  const LostPageList = data.pages[0].result;
  console.log(data);

  return (
    <div className="flex flex-col mt-3">
      {LostPageList.lostItemPreViewDTOList.length > 0 ? (
        LostPageList.lostItemPreViewDTOList.map((lost: ILostItem) => {
          return (
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
          );
        })
      ) : (
        <></>
      )}

      <div ref={ref}>{isFetching}</div>
    </div>
  );
};

export default SearchLostList;

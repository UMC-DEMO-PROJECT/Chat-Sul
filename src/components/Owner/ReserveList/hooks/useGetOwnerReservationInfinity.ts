import { useInfiniteQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { GetOwnerReservation } from 'shared/api/reservation';

const useGetOwnerReservationInfinity = (
  menuStatus: string,
  venueId: number
) => {
  const [ref, inView] = useInView();
  const { data, hasNextPage, fetchNextPage, refetch, isLoading } =
    useInfiniteQuery({
      queryKey: [`owner-reserve-list`, venueId],
      queryFn: ({ pageParam }) =>
        GetOwnerReservation(pageParam, menuStatus, venueId),
      getNextPageParam: (
        lastPage,
        _allPage,
        lastPageParam
      ): number | undefined => {
        if (lastPage.result.totalPage == lastPageParam + 1) {
          return undefined;
        }
        return lastPageParam + 1;
      },
      initialPageParam: 0,
    });

  useEffect(() => {
    refetch();
  }, [menuStatus]);

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage]);
  return { data, isLoading, ref };
};

export default useGetOwnerReservationInfinity;

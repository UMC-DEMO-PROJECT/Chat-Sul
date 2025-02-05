import { useInfiniteQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { GetReservation } from 'shared/api/reservation';

export const useGetReserveListInfinity = () => {
  const [ref, inView] = useInView();
  const { data, hasNextPage, fetchNextPage, isLoading, isError } =
    useInfiniteQuery({
      queryKey: ['user-reserve-list'],
      queryFn: ({ pageParam }) => GetReservation(pageParam),
      getNextPageParam: (
        lastPage,
        _allPage,
        lastPageParam
      ): number | undefined => {
        if (lastPage.result?.totalPage == lastPageParam + 1) {
          return undefined;
        }
        return lastPageParam + 1;
      },
      initialPageParam: 0,
    });
  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage]);
  return { data, isLoading, isError, ref };
};

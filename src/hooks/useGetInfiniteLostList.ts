import {
  DefaultError,
  InfiniteData,
  QueryKey,
  useInfiniteQuery,
  UseInfiniteQueryOptions,
} from '@tanstack/react-query';
import { GetLostList_User } from 'shared/api/lost';
import { TLostListResponse } from 'shared/type/LostType';

interface IUseGetInfiniteLostLIstProps {
  queryOptions?: UseInfiniteQueryOptions<
    TLostListResponse,
    DefaultError,
    InfiniteData<TLostListResponse, number>,
    TLostListResponse,
    QueryKey,
    number
  >;
  venueId: number;
}

export function useGetInfiniteLostList({
  queryOptions,
  venueId,
}: IUseGetInfiniteLostLIstProps) {
  return useInfiniteQuery({
    queryFn: ({ pageParam }) => GetLostList_User({ page: pageParam, venueId }),
    queryKey: ['Lost', venueId],
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPage) => {
      const lastMovie = lastPage.content[lastPage.content.length - 1];
      return lastMovie ? allPage?.length + 1 : undefined;
    },
    ...queryOptions,
  });
}

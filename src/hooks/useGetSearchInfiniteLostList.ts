import {
  DefaultError,
  InfiniteData,
  QueryKey,
  useInfiniteQuery,
  UseInfiniteQueryOptions,
} from '@tanstack/react-query';
import { GetSearch } from 'shared/api/lost';
import { IGetLostListResponse } from 'shared/type/LostType';

interface IUseGetInfiniteLostLIstProps {
  queryOptions?: UseInfiniteQueryOptions<
    IGetLostListResponse,
    DefaultError,
    InfiniteData<IGetLostListResponse, number>,
    IGetLostListResponse,
    QueryKey,
    number
  >;
  venueId: number;
  text: string;
}

export function useGetSearchInfiniteLostList({
  queryOptions,
  venueId,
  text,
}: IUseGetInfiniteLostLIstProps) {
  return useInfiniteQuery({
    queryFn: ({ pageParam }) => GetSearch({ page: pageParam, venueId, text }),
    queryKey: ['SearchLost', venueId],
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage?.result?.isLast) {
        return undefined;
      }
      return allPages.length;
    },
    ...queryOptions,
  });
}

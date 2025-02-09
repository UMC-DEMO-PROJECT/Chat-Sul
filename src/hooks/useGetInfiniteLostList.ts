import {
  DefaultError,
  InfiniteData,
  QueryKey,
  useInfiniteQuery,
  UseInfiniteQueryOptions,
} from '@tanstack/react-query';
import { GetLostList_User } from 'shared/api/lost';
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
}

export function useGetInfiniteLostList({
  queryOptions,
  venueId,
}: IUseGetInfiniteLostLIstProps) {
  return useInfiniteQuery({
    queryFn: ({ pageParam }) => GetLostList_User({ page: pageParam, venueId }),
    queryKey: ['Lost', venueId],
    initialPageParam: 0,
    getNextPageParam: (
      lastPage,
      _allPage,
      lastPageParam
    ): number | undefined => {
      if (lastPage.result?.isLast) {
        return undefined;
      }
      return lastPageParam + 1;
    },
    ...queryOptions,
  });
}

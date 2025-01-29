import {
  DefaultError,
  InfiniteData,
  QueryKey,
  useInfiniteQuery,
  UseInfiniteQueryOptions,
} from '@tanstack/react-query';
import { GetLostList } from 'shared/api/lost';
import { TLostListResponse } from 'shared/type/LostType';

export function useGetInfiniteLostList(
  queryOptions?: UseInfiniteQueryOptions<
    TLostListResponse,
    DefaultError,
    InfiniteData<TLostListResponse, number>,
    TLostListResponse,
    QueryKey,
    number
  >
) {
  return useInfiniteQuery({
    queryFn: ({ pageParam }) => GetLostList({ page: pageParam }),
    queryKey: ['Lost'],
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPage) => {
      const lastMovie = lastPage.content[lastPage.content.length - 1];
      return lastMovie ? allPage?.length + 1 : undefined;
    },
    ...queryOptions,
  });
}

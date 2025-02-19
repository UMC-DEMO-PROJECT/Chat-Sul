import { useQueryClient } from '@tanstack/react-query';

const useOwnerReserveListValidateQuery = (
  queryKey: string,
  venueId: number
) => {
  const queryClient = useQueryClient();
  const invalidateReserveList = () => {
    queryClient.invalidateQueries({
      queryKey: [queryKey, venueId],
    });
  };
  return invalidateReserveList;
};

export default useOwnerReserveListValidateQuery;

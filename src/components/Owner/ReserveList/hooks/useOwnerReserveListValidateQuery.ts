import { useQueryClient } from '@tanstack/react-query';

const useOwnerReserveListValidateQuery = (
  queryKey: string,
  venueId: number
) => {
  const queryClient = useQueryClient();
  const invalidateReserveList = () => {
    console.log(queryKey);
    queryClient.invalidateQueries({
      queryKey: [queryKey, venueId],
    });
  };
  return invalidateReserveList;
};

export default useOwnerReserveListValidateQuery;

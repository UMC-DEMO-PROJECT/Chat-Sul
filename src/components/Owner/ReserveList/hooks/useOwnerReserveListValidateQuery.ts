import { useQueryClient } from '@tanstack/react-query';

const useOwnerReserveListValidateQuery = (queryKey: string) => {
  const queryClient = useQueryClient();
  const invalidateReserveList = () => {
    queryClient.invalidateQueries({
      queryKey: [queryKey],
    });
  };
  return invalidateReserveList;
};

export default useOwnerReserveListValidateQuery;

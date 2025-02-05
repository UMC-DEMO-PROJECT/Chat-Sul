import { useQueryClient } from '@tanstack/react-query';

const useReserveListValidateQuery = () => {
  const queryClient = useQueryClient();
  const invalidateReserveList = () => {
    queryClient.invalidateQueries({
      queryKey: [`user-reserve-list`],
    });
  };
  return invalidateReserveList;
};

export default useReserveListValidateQuery;

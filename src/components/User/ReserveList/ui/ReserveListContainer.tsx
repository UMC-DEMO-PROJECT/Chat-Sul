import { useEffect, useState } from 'react';
import ModalLayout from '../../../../shared/ui/Modal/ModalLayout/ModalLayout';
import TopBar from '../../../../shared/ui/TopBar/TopBar';
import RentalCard from '../../../../shared/ui/RentalCard/RentalCard';
import AlertContainer from './Alert/AlertContainer';
import { TAlertType, TReserveListResponse } from '../type/TReserveList';
import { useInfiniteQuery } from '@tanstack/react-query';
import { GetReservation } from 'shared/api/reservation';
import { useInView } from 'react-intersection-observer';

const ReserveListContainer = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [alertType, setAlertType] = useState<TAlertType>('CONFIRMED');

  const [ref, inView] = useInView();

  const { data, hasNextPage, fetchNextPage } = useInfiniteQuery({
    queryKey: ['user-reserve-list'],
    queryFn: ({ pageParam }) => GetReservation(pageParam),
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
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage]);

  return (
    <>
      <TopBar
        title="대관확인"
        onFirstClick={() => {
          console.log('fetch');
          fetchNextPage();
        }}
      />
      {data?.pages.map((element) =>
        element.result.reservationList.map((item: TReserveListResponse) => {
          return (
            <RentalCard
              key={item.reservationId}
              venueName={item.venueName}
              numberOfGuests={item.numberOfGuests}
              reservationDate={item.reservationDate}
              reservationTime={item.reservationTime}
              status={item.status}
              onClick={() => {
                console.log(item);
                setAlertType(item.status);
                setIsOpen(true);
              }}
            />
          );
        })
      )}
      <div ref={ref}></div>
      <ModalLayout
        isOpen={isOpen}
        closeModal={() => {
          setIsOpen(false);
        }}
      >
        <AlertContainer alertType={alertType} setIsOpen={setIsOpen} />
      </ModalLayout>
    </>
  );
};

export default ReserveListContainer;

import { useEffect, useState } from 'react';
import ModalLayout from '../../../shared/ui/Modal/ModalLayout/ModalLayout';
import TopBar from '../../../shared/ui/TopBar/TopBar';
import RentalCard from '../../../shared/ui/RentalCard/RentalCard';
import AlertContainer from './AlertContainer';
import TagBar from './TagBar';
import { TDataStatus, TMenuStatus } from './types/dataTypes';
import { useInView } from 'react-intersection-observer';
import { useInfiniteQuery } from '@tanstack/react-query';
import { GetOwnerReservation } from 'shared/api/reservation';
import RentarCardSkeleton from 'shared/ui/RentalCard/RentarCardSkeleton';

const ReserveListContainer = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [menuStatus, setMenuStatus] = useState<TMenuStatus>('ALL');
  const [alertType, setAlertType] = useState<TDataStatus>('CONFIRMED');
  const [ref, inView] = useInView();

  const venueId = 2; // venueId랑 TopBar title를 useParams랑 uselocation으로 받아서 넣어야함.

  // isError 처리해야함.
  const { data, hasNextPage, fetchNextPage, refetch, isLoading } =
    useInfiniteQuery({
      queryKey: [`owner-reserve-list-${venueId}-${menuStatus}`],
      queryFn: ({ pageParam }) =>
        GetOwnerReservation(pageParam, menuStatus, venueId),
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
    // menuStatus가 바뀌었을 때 다른status로 요청
    refetch();
  }, [menuStatus]);

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage]);

  return (
    <>
      <TopBar title="대관확인" onFirstClick={() => {}} />
      <TagBar status={menuStatus} setStatus={setMenuStatus} />
      {data?.pages.map((element) =>
        element.result.reservationList.map((item) => {
          return (
            <RentalCard
              key={item.reservationId}
              venueName={item.venueName}
              numberOfGuests={item.numberOfGuests}
              reservationDate={item.reservationDate}
              reservationTime={item.reservationTime}
              status={item.status}
              isUser={true}
              onCancel={() => {}}
              onClick={() => {
                console.log(item);
                setAlertType(item.status);
                setIsOpen(true);
              }}
            />
          );
        })
      )}
      <RentarCardSkeleton isLoading={isLoading} count={6} />
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

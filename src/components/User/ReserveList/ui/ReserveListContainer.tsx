import { useEffect, useState } from 'react';
import ModalLayout from '../../../../shared/ui/Modal/ModalLayout/ModalLayout';
import TopBar from '../../../../shared/ui/TopBar/TopBar';
import RentalCard from '../../../../shared/ui/RentalCard/RentalCard';
import AlertContainer from './Alert/AlertContainer';
import {
  IReserveListResponse,
  TAlertType,
  THandleModalOpen,
} from '../type/TReserveList';
import { useInfiniteQuery } from '@tanstack/react-query';
import { GetReservation } from 'shared/api/reservation';
import { useInView } from 'react-intersection-observer';
import RentarCardSkeleton from '../../../../shared/ui/RentalCard/RentarCardSkeleton';

const ReserveListContainer = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [alertType, setAlertType] = useState<TAlertType>('CONFIRMED');
  const [selectedReservationId, setSelectedReservationId] =
    useState<number>(-1);
  const [phone, setPhone] = useState<string>('');
  const [ref, inView] = useInView();

  // isError는 어떻게 처리할 지 회의 필요
  const { data, hasNextPage, fetchNextPage, isLoading, isError } =
    useInfiniteQuery({
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

  const handleModalOpen: THandleModalOpen = (
    alertType,
    reservationId,
    phone
  ) => {
    setAlertType(alertType);
    if (phone) {
      setPhone(phone);
    }
    if (reservationId) {
      setSelectedReservationId(reservationId);
    }
    setIsOpen(true);
  };

  return (
    <>
      <TopBar title="대관확인" onFirstClick={() => {}} />
      {data?.pages.map((element) =>
        element.result.reservationList.map((item: IReserveListResponse) => {
          return (
            <RentalCard
              key={item.reservationId}
              venueName={item.venueName}
              numberOfGuests={item.numberOfGuests}
              reservationDate={item.reservationDate}
              reservationTime={item.reservationTime}
              status={item.status}
              isUser={true}
              onCancel={() => {
                handleModalOpen('RESERVATION_CANCEL', item.reservationId);
              }}
              onClick={() => {
                handleModalOpen(item.status, item.reservationId);
              }}
            />
          );
        })
      )}
      <RentarCardSkeleton isLoading={isLoading} count={6} />
      {isError && '서버와의 연결이 불안정합니다.'}
      <div ref={ref}></div>
      <ModalLayout
        isOpen={isOpen}
        closeModal={() => {
          setIsOpen(false);
        }}
      >
        <AlertContainer
          alertType={alertType}
          setIsOpen={setIsOpen}
          handleModalOpen={handleModalOpen}
          reservationId={selectedReservationId}
          phone={phone}
        />
      </ModalLayout>
    </>
  );
};

export default ReserveListContainer;

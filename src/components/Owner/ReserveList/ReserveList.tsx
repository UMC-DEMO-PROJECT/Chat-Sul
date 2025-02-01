import { useEffect, useState } from 'react';
import ModalLayout from '../../../shared/ui/Modal/ModalLayout/ModalLayout';
import TopBar from '../../../shared/ui/TopBar/TopBar';
import RentalCard from '../../../shared/ui/RentalCard/RentalCard';
import TagBar from './ui/TagBar/TagBar';
import {
  IOwnerReservationResponse,
  ISelectedReservationInfo,
  TAlertType,
  TMenuStatus,
} from './types/TReserveList';
import { useInView } from 'react-intersection-observer';
import { useInfiniteQuery } from '@tanstack/react-query';
import { GetOwnerReservation } from 'shared/api/reservation';
import RentarCardSkeleton from 'shared/ui/RentalCard/RentarCardSkeleton';
import AlertContainer from './ui/Alert/AlertContainer';
import { useNavigate } from 'react-router-dom';

const ReserveListContainer = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [menuStatus, setMenuStatus] = useState<TMenuStatus>('ALL');
  const [alertType, setAlertType] = useState<TAlertType>(
    'WAITING_CONFIRMATION'
  );
  const [selectedReservationInfo, setSelectedReservationInfo] =
    useState<ISelectedReservationInfo>({
      reservationDate: '',
      reservationTime: '',
      numberOfGuests: -1,
      reservationName: '',
      reservationId: -1,
    });
  const [ref, inView] = useInView();

  const venueId = 6; // venueId랑 TopBar title를 useParams랑 uselocation으로 받아서 넣어야함.

  // isError 처리해야함.
  const { data, hasNextPage, fetchNextPage, refetch, isLoading } =
    useInfiniteQuery({
      queryKey: [`owner-reserve-list-${venueId}`],
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
    refetch();
  }, [menuStatus]);

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
          navigate('/owner');
        }}
      />
      <TagBar status={menuStatus} setStatus={setMenuStatus} />
      {data?.pages.map((element) =>
        element.result.reservationList.map(
          (item: IOwnerReservationResponse) => {
            return (
              <RentalCard
                key={item.reservationId}
                Name={item.reservationName}
                numberOfGuests={item.numberOfGuests}
                reservationDate={item.reservationDate}
                reservationTime={item.reservationTime}
                status={item.status}
                isUser={false}
                onCancel={() => {}}
                onClick={() => {
                  setSelectedReservationInfo({
                    reservationName: item.reservationName,
                    reservationDate: item.reservationDate,
                    reservationTime: item.reservationTime,
                    numberOfGuests: item.numberOfGuests,
                    reservationId: item.reservationId,
                  });
                  console.log(item);
                  if (
                    item.status == 'WAITING_CONFIRMATION' ||
                    item.status == 'WAITING_DEPOSIT'
                  ) {
                    setAlertType(item.status);
                    setIsOpen(true);
                  }
                }}
              />
            );
          }
        )
      )}
      <RentarCardSkeleton isLoading={isLoading} count={6} />
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
          selectedReservationInfo={selectedReservationInfo}
        />
      </ModalLayout>
    </>
  );
};

export default ReserveListContainer;

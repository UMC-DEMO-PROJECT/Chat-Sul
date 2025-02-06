import { useState } from 'react';
import ModalLayout from '../../../shared/ui/Modal/ModalLayout/ModalLayout';
import TopBar from '../../../shared/ui/TopBar/TopBar';
import RentalCard from '../../../shared/ui/RentalCard/RentalCard';
import TagBar from './ui/TagBar/TagBar';
import { IOwnerReservationResponse, TMenuStatus } from './types/TReserveList';
import RentarCardSkeleton from 'shared/ui/RentalCard/RentarCardSkeleton';
import AlertContainer from './ui/Alert/AlertContainer';
import { useNavigate } from 'react-router-dom';
import useGetOwnerReservationInfinity from './hooks/useGetOwnerReservationInfinity';
import ModalContextProvider from './context/SelectedModalDataContextProvider';
import {
  useSelectedDataDispatch,
  useSelectedDataState,
} from './context/SelectedModalDataContext';

const venueId = localStorage.getItem('ownerId') ?? 0;
const ReserveListInner = () => {
  const navigate = useNavigate();
  const modalData = useSelectedDataState();
  const dispatch = useSelectedDataDispatch();
  const [menuStatus, setMenuStatus] = useState<TMenuStatus>('ALL');
  const { data, isLoading, ref } = useGetOwnerReservationInfinity(
    menuStatus,
    Number(venueId)
  );
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
                  dispatch({
                    type: item.status,
                    value: {
                      status: item.status,
                      reservationName: item.reservationName,
                      reservationDate: item.reservationDate,
                      reservationTime: item.reservationTime,
                      numberOfGuests: item.numberOfGuests,
                      reservationId: item.reservationId,
                    },
                  });
                }}
              />
            );
          }
        )
      )}
      <RentarCardSkeleton isLoading={isLoading} count={6} />
      <div ref={ref}></div>
      <ModalLayout
        isOpen={modalData.isOpen}
        closeModal={() => {
          dispatch({ type: 'CLOSE_MODAL' });
        }}
      >
        <AlertContainer />
      </ModalLayout>
    </>
  );
};

const ReserveListContainer = () => {
  return (
    <ModalContextProvider>
      <ReserveListInner />
    </ModalContextProvider>
  );
};

export default ReserveListContainer;

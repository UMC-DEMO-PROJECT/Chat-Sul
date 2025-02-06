import ModalLayout from '../../../../shared/ui/Modal/ModalLayout/ModalLayout';
import TopBar from '../../../../shared/ui/TopBar/TopBar';
import RentalCard from '../../../../shared/ui/RentalCard/RentalCard';
import AlertContainer from './Alert/AlertContainer';
import { IReserveListResponse } from '../type/TReserveList';
import RentarCardSkeleton from '../../../../shared/ui/RentalCard/RentarCardSkeleton';
import { useNavigate } from 'react-router-dom';
import { useGetReserveListInfinity } from '../hooks/useGetReserveListInfinity';
import ModalDataProvider from '../context/SelectedModalDataContextProvider';
import {
  useSelectedDataDispatch,
  useSelectedDataState,
} from '../context/SelectedModalDataContext';

const ReserveListInner = () => {
  const navigate = useNavigate();
  const { data, isLoading, isError, ref } = useGetReserveListInfinity();
  const modalData = useSelectedDataState();
  const dispatch = useSelectedDataDispatch();

  return (
    <>
      <TopBar
        title="대관확인"
        onFirstClick={() => {
          navigate('/user/shop');
        }}
      />
      {data?.pages.map((element) =>
        element.result.reservationList.map((item: IReserveListResponse) => {
          return (
            <RentalCard
              key={item.reservationId}
              Name={item.venueName}
              numberOfGuests={item.numberOfGuests}
              reservationDate={item.reservationDate}
              reservationTime={item.reservationTime}
              status={item.status}
              isUser={true}
              onCancel={() => {
                dispatch({
                  type: 'RESERVATION_CANCEL',
                  reservationId: item.reservationId,
                });
              }}
              onClick={() => {
                if (item.status == 'WAITING_DEPOSIT') {
                  dispatch({
                    type: item.status,
                    reservationId: item.reservationId,
                  });
                }
              }}
            />
          );
        })
      )}
      <RentarCardSkeleton isLoading={isLoading} count={6} />
      {isError && '서버와의 연결이 불안정합니다.'}
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
    <ModalDataProvider>
      <ReserveListInner />
    </ModalDataProvider>
  );
};
export default ReserveListContainer;

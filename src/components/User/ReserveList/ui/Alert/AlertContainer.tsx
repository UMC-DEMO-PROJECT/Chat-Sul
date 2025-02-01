import { AlertContainerProps } from '../../type/TReserveList';
import WaitingConfirmation from './WaitingConfirmation';
import WaitingDepositAlert from './WaitingDepositAlert';
import ReservationCancelAlert from './ReservationCancelAlert';
import ReservationCancelFailAlert from './ReservationCancelFailAlert';
const AlertContainer = ({
  alertType,
  setIsOpen,
  handleModalOpen,
  reservationId,
  phone,
}: AlertContainerProps) => {
  if (alertType === 'RESERVATION_CANCEL') {
    return (
      <ReservationCancelAlert
        setIsOpen={setIsOpen}
        handleModalOpen={handleModalOpen}
        reservationId={reservationId}
      />
    );
  }
  if (alertType === 'RESERVATION_CANCEL_FAIL') {
    return <ReservationCancelFailAlert phone={phone} setIsOpen={setIsOpen} />;
  }
  if (alertType === 'WAITING_DEPOSIT') {
    return (
      <WaitingDepositAlert
        setIsOpen={setIsOpen}
        reservationId={reservationId}
      />
    );
  }
  if (alertType === 'WAITING_CONFIRMATION') {
    return <WaitingConfirmation setIsOpen={setIsOpen} />;
  }
};

export default AlertContainer;

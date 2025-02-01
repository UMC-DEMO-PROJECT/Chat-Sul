import { AlertContainerProps } from '../../types/TReserveList';
import WaitingConfirmationAlert from './WaitingConfirmation';
import WaitingDepositAlert from './WaitingDepositAlert';
const AlertContainer = ({
  alertType,
  setIsOpen,
  selectedReservationInfo,
}: AlertContainerProps) => {
  if (alertType === 'WAITING_DEPOSIT') {
    return (
      <WaitingDepositAlert
        setIsOpen={setIsOpen}
        selectedReservationInfo={selectedReservationInfo}
      />
    );
  }
  if (alertType === 'WAITING_CONFIRMATION') {
    return (
      <WaitingConfirmationAlert
        setIsOpen={setIsOpen}
        selectedReservationInfo={selectedReservationInfo}
      />
    );
  }
};

export default AlertContainer;

import { TAlertContainerProps } from '../../type/TReserveList';
import CancelledAlert from './CancelledAlert';
import ConfirmedAlert from './ConfirmedAlert';
import WaitingConfirmation from './WaitingConfirmation';
import WaitingDepositAlert from './WaitingDepositAlert';

const AlertContainer = ({ alertType, setIsOpen }: TAlertContainerProps) => {
  if (alertType === 'CONFIRMED') {
    return <ConfirmedAlert />;
  }
  if (alertType === 'CANCELLED') {
    return <CancelledAlert />;
  }
  if (alertType === 'WAITING_DEPOSIT') {
    return <WaitingDepositAlert setIsOpen={setIsOpen} />;
  }

  if (alertType === 'WAITING_CONFIRMATION') {
    return <WaitingConfirmation setIsOpen={setIsOpen} />;
  }
};

export default AlertContainer;

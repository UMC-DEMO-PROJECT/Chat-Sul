import WaitingDepositAlert from './WaitingDepositAlert';
import ReservationCancelAlert from './ReservationCancelAlert';
import ReservationCancelFailAlert from './ReservationCancelFailAlert';
import { useSelectedDataState } from '../../context/SelectedModalDataContext';

const Alert = {
  RESERVATION_CANCEL: ReservationCancelAlert,
  RESERVATION_CANCEL_FAIL: ReservationCancelFailAlert,
  WAITING_DEPOSIT: WaitingDepositAlert,
};

const AlertContainer = () => {
  const modalData = useSelectedDataState();
  const SelectedAlert = Alert[modalData.alertType];
  return <SelectedAlert />;
};

export default AlertContainer;

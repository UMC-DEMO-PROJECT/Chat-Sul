import { useSelectedDataState } from '../../context/SelectedModalDataContext';
import WaitingConfirmationAlert from './WaitingConfirmation';
import WaitingDepositAlert from './WaitingDepositAlert';

const Alert = {
  WAITING_DEPOSIT: WaitingDepositAlert,
  WAITING_CONFIRMATION: WaitingConfirmationAlert,
};

const AlertContainer = () => {
  const modalData = useSelectedDataState();
  const SelectedAlert = Alert[modalData.alertType];
  return <SelectedAlert />;
};

export default AlertContainer;

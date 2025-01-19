import { useEffect, useState } from 'react';
import ModalLayout from '../../../shared/ui/Modal/ModalLayout/ModalLayout';
import TopBar from '../../../shared/ui/TopBar/TopBar';
import RentalCard from '../../../shared/ui/RentalCard/RentalCard';
import AlertContainer from './AlertContainer';
import TagBar from './TagBar';
import { DataTypeInView } from './types/dataTypes';

type alertType = 'confirmed' | 'watingConfirmation' | 'waitingDeposit';

interface DataType {
  id: number;
  shopName: string;
  personCount: number;
  status: alertType;
}

const dummyData: DataType[] = [
  { id: 1, shopName: '가게1', personCount: 10, status: 'confirmed' },
  { id: 1, shopName: '가게1', personCount: 10, status: 'confirmed' },
  { id: 1, shopName: '가게1', personCount: 10, status: 'confirmed' },
  { id: 2, shopName: '가게2', personCount: 5, status: 'waitingDeposit' },
  { id: 3, shopName: '가게3', personCount: 20, status: 'watingConfirmation' },
];

const ReserveListContainer = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [status, setStatus] = useState<DataTypeInView>('all'); // status에 따라 서버에 요청을 다르게 보내면 RentalCard는 건들지않아도됨
  const [alertType, setAlertType] = useState<alertType>('confirmed');

  useEffect(() => {
    // status에 따른 서버 요청
  }, [status]);

  return (
    <>
      <TopBar title="대관확인" onFirstClick={() => {}} />
      <TagBar status={status} setStatus={setStatus} />
      {dummyData.map((item) => {
        return (
          <RentalCard
            key={item.id}
            shopName={item.shopName}
            personCount={item.personCount}
            status={item.status}
            disabled={item.status == 'confirmed'}
            onClick={() => {
              setAlertType(item.status);
              setIsOpen(true);
            }}
          />
        );
      })}

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

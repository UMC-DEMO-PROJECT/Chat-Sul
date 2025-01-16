import { useState } from 'react';
import ModalLayout from '../../../shared/ui/Modal/ModalLayout/ModalLayout';
import TopBar from '../../../shared/ui/TopBar/TopBar';
import RentalCard from '../../../shared/ui/RentalCard/RentalCard';
import AlertContainer from './AlertContainer';

interface DataType {
  id: number;
  shopName: string;
  personCount: number;
  status: 'confirmed' | 'failed' | 'pending';
}

const dummyData: DataType[] = [
  { id: 1, shopName: '가게1', personCount: 10, status: 'confirmed' },
  { id: 2, shopName: '가게2', personCount: 5, status: 'failed' },
  { id: 3, shopName: '가게3', personCount: 20, status: 'pending' },
];

const ReserveListContainer = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [alertType, setAlertType] = useState<
    'confirmed' | 'failed' | 'pending' | null
  >(null);

  return (
    <>
      <TopBar title="대관확인" onFirstClick={() => {}} />
      {dummyData.map((item) => {
        return (
          <RentalCard
            key={item.id}
            shopName={item.shopName}
            personCount={item.personCount}
            status={item.status}
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

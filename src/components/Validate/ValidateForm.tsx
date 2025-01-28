import React, { useState } from 'react';
import AccountInput from '../../shared/ui/Input/AccountInput';
import Input from '../../shared/ui/Input/Input';
import Button from '../../shared/ui/Button/button';
import { PostAdd } from 'shared/api/venue';
import { useNavigate } from 'react-router-dom';

const ValidateForm = () => {
  const navigate = useNavigate();

  const [locationValue, setLocationValue] = useState('');

  const handleAddressSearch = () => {
    new daum.Postcode({
      oncomplete: function (data: DaumAddressData) {
        const { address } = data;

        setLocationValue(address);
      },
    }).open();
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = {
      phone: shopNumberValue,
      name: shopTitleValue,
      address: locationValue,
      // detailAddress: locationDetailValue,
      bank: selectedAccount,
      account: accountNumberValue,
    };

    console.log('사업자 인증 성공', formData);
    try {
      const response = await PostAdd(formData);
      console.log('response: ', response);
      navigate('/map');
    } catch (error) {
      console.error(error);
    }
  };

  const [shopNumberValue, setShopNumberValue] = useState('');
  const [shopTitleValue, setShopTitleValue] = useState('');
  const [accountNumberValue, setAccountNumberValue] = useState('');
  const [locationDetailValue, setLocationDetailValue] = useState('');

  const handleShopNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setShopNumberValue(value);
  };

  const handleShopTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setShopTitleValue(value);
  };

  const handleAccountNumberChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value;
    setAccountNumberValue(value);
  };

  const handleLocationDetail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setLocationDetailValue(value);
  };

  const [selectedAccount, setSelectedAccount] = useState(''); // 선택된 계좌 항목을 저장

  const accountItems: { id: number; name: string }[] = [
    { id: 1, name: '신한' },
    { id: 2, name: '하나' },
    { id: 3, name: '우리' },
    { id: 4, name: '기업' },
    { id: 5, name: '카카오' },
    { id: 6, name: '토스' },
    { id: 7, name: '케이뱅크' },
    { id: 8, name: '국민' },
    { id: 9, name: '새마을' },
    { id: 10, name: '농협' },
  ];

  const dropdownItems: string[] = accountItems.map((item) => item.name);

  const handleDropdownSelect = (selectedItem: string) => {
    setSelectedAccount(selectedItem);
    console.log(`선택된 계좌: ${selectedItem}`);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col mx-auto gap-6">
        <Input
          placeholder="전화번호를 -없이 입력해주세요."
          title="가게 번호"
          value={shopNumberValue}
          onChange={handleShopNumberChange}
        />
        <Input
          placeholder="매장명을 입력해주세요."
          title="가게 이름"
          value={shopTitleValue}
          onChange={handleShopTitleChange}
        />
        <AccountInput
          placeholder="계좌번호를 입력해주세요."
          title="계좌번호"
          value={accountNumberValue}
          onChange={handleAccountNumberChange}
          dropdownItems={dropdownItems}
          onDropdownSelect={handleDropdownSelect}
          selectedAccount={selectedAccount}
        />
        <Input
          title="도로명 주소"
          placeholder="주소를 검색해주세요"
          value={locationValue}
          readOnly
          onClick={handleAddressSearch}
        />
        <Input
          title="상세 주소"
          placeholder="상세주소를 입력해주세요."
          value={locationDetailValue}
          onChange={handleLocationDetail}
        />
        <Button size="large" colorType="filled">
          다음
        </Button>
      </form>
    </>
  );
};

export default ValidateForm;

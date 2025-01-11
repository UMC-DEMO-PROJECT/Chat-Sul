import React, { useState } from 'react';
import AccountInput from '../../shared/ui/Input/AccountInput';
import Input from '../../shared/ui/Input/Input';
import Button from '../button';

const ValidateForm = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = {
      shopNumber: shopNumberValue,
      shopTitle: shopTitleValue,
      name: nameValue,
      account: {
        account: selectedAccount,
        accountNumber: accountNumberValue,
      },
    };

    console.log('사업자 인증 성공', formData);
  };

  const [shopNumberValue, setShopNumberValue] = useState('');
  const [shopTitleValue, setShopTitleValue] = useState('');
  const [nameValue, setNameValue] = useState('');
  const [accountNumberValue, setAccountNumberValue] = useState('');

  const handleShopNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setShopNumberValue(value);
  };

  const handleShopTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setShopTitleValue(value);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setNameValue(value);
  };

  const handleAccountNumberChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value;
    setAccountNumberValue(value);
  };

  const [selectedAccount, setSelectedAccount] = useState(''); // 선택된 계좌 항목을 저장

  const accountItems: { id: number; name: string }[] = [
    { id: 1, name: '신한' },
    { id: 2, name: '하나' },
    { id: 3, name: '우리' },
    { id: 4, name: '기업' },
  ];

  const dropdownItems: string[] = accountItems.map((item) => item.name);

  const handleDropdownSelect = (selectedItem: string) => {
    setSelectedAccount(selectedItem);
    console.log(`선택된 계좌: ${selectedItem}`);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
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
        <Input
          placeholder="성명을 입력해주세요"
          title="입금자명"
          value={nameValue}
          onChange={handleNameChange}
        />
        <AccountInput
          placeholder="계좌번호를 입력해주세요."
          title="계좌번호"
          value={accountNumberValue}
          onChange={handleAccountNumberChange}
          dropdownItems={dropdownItems}
          onDropdownSelect={handleDropdownSelect}
        />
        <Button size="large" colorType="filled">
          다음
        </Button>
      </form>
    </>
  );
};

export default ValidateForm;

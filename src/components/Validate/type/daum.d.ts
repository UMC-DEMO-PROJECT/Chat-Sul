declare global {
  interface DaumPostcode {
    open: () => void;
    oncomplete: (data: DaumAddressData) => void;
  }

  interface DaumAddressData {
    zonecode: string;
    address: string;
  }

  const daum: {
    Postcode: new (data) => DaumPostcode;
  };
}

interface Window {
  daum: any; // daum 객체를 any 타입으로 선언하여 타입 검사를 피합니다.
}

export {};

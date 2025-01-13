//ex) 사용자가 선택한 국가를 저장한 경우 
import React, { useState } from "react";
import DropDown from "./DropDown"; // DropDown 컴포넌트 import

const CountrySelector = (): JSX.Element => {
  const [selectedCountry, setSelectedCountry] = useState<string>("");

  const handleCountrySelect = (country: string) => {
    setSelectedCountry(country); // 사용자가 선택한 국가 저장
    console.log(`선택된 국가: ${country}`); // 콘솔에 출력
  };

  const countries = ["한국", "미국", "영국", "일본", "독일"];

  return (
    <div className="p-5">
      <h1 className="text-xl mb-3">국가 선택</h1>
      <DropDown options={countries} onSelect={handleCountrySelect} />
      <p className="mt-3">선택된 국가: {selectedCountry}</p>
    </div>
  );
};

export default CountrySelector;

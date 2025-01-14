//ex) 아이콘을 여러 크기로 표시한 경우 
import React from "react";
import Icon from "./Icon"; // Icon 컴포넌트 import

const App = (): JSX.Element => {
  return (
    <div className="p-5 space-y-5">
      <h1 className="text-2xl font-bold mb-4">아이콘 예시</h1>

      {/* 기본 크기 (기본값: 24px) */}
      <div className="flex items-center space-x-4">
        <Icon name="home" />
        <p className="text-gray-700">기본 크기</p>
      </div>

      {/* 크기를 지정한 아이콘 (48px) */}
      <div className="flex items-center space-x-4">
        <Icon name="search" size={48} />
        <p className="text-gray-700">크기: 48px</p>
      </div>

      {/* 다른 크기 (72px) */}
      <div className="flex items-center space-x-4">
        <Icon name="settings" size={72} />
        <p className="text-gray-700">크기: 72px</p>
      </div>

      {/* .svg 확장자를 명시적으로 입력한 아이콘 */}
      <div className="flex items-center space-x-4">
        <Icon name="user-profile.svg" size={40} />
        <p className="text-gray-700">.svg 파일명 입력</p>
      </div>
    </div>
  );
};

export default App;


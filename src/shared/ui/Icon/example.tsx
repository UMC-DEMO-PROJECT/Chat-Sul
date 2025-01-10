import React from "react";

// props의 타입 정의
interface IconProps {
  name: string;
  size: number;
  color: string;
}

const Icon: React.FC<IconProps> = ({ name, size, color }) => {
  // 아이콘 렌더링 로직 (예시로 텍스트로 렌더링)
  // 실제 사용하려면 아이콘 라이브러리 또는 SVG를 이용
  return (
    <span style={{ fontSize: size, color: color }}>
      {name} {/* 실제 아이콘 라이브러리를 사용하는 경우 아이콘을 여기에 렌더링 */}
    </span>
  );
};

export default Icon;

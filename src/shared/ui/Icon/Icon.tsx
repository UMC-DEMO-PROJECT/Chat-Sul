import React from "react";

// props의 타입 정의
interface IconProps {
  name: string; // 아이콘의 이름 (파일명)
  size?: number; // 아이콘 크기 (옵션)
}

const Icon: React.FC<IconProps> = ({ name, size = 24 }) => {
  // name에 .svg가 포함되지 않으면 .svg 확장자 추가
  const iconPath = name.endsWith('.svg') ? `/icons/${name}` : `/icons/${name}.svg`;

  return (
    <div className="flex flex-col items-center">
      <img
        src={iconPath}
        alt={`${name} icon`}
        className="rounded"
        style={{ width: size, height: size }}
      />
      <p className="mt-2 text-sm text-gray-600">
        Icon path: <code className="bg-gray-100 px-1 rounded">{iconPath}</code>
      </p>
    </div>
  );
};

export default Icon;

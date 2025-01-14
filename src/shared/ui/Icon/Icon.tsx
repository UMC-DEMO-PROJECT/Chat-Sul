/**
 * Icon Component
 *
 * Icon을 사용할 수 있는 Icon Component입니다.
 *
 * name에 svg가 추가되어 있지 않다면 자동으로 .svg가 추가됩니다.
 *
 * @param {string} name - 아이콘의 이름 (파일명)
 * @param {number} size - 아이콘의 크기
 */

interface IconProps {
  name: string;
  size?: number;
}

const Icon = ({ name, size = 24 }: IconProps) => {
  const iconPath = name.endsWith('.svg')
    ? `/icons/${name}`
    : `/icons/${name}.svg`;

  return (
    <div className="flex flex-col items-center">
      <img
        className={`w-[${size}] h-[${size}] rounded`}
        src={iconPath}
        alt={`${name} icon`}
      />
    </div>
  );
};

export default Icon;

// props의 타입 정의
interface DropDownProps {
  options: string[]; // 가게 이름 목록
  onChange: (locationName: string) => void; // 선택된 가게 이름을 처리하는 함수
}

const DropDown = ({ options, onChange }: DropDownProps) => {
  return (
    <select onChange={(e) => onChange(e.target.value)}>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default DropDown;

interface DropDownProps {
  options: string[];
  onChange: (locationName: string) => void;
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

interface MenuProps {
  isSelected: boolean;
  text: string;
  isReserved?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const Menu = ({ isSelected, text, isReserved, onClick }: MenuProps) => {
  return (
    <button
      onClick={onClick}
      disabled={isSelected || isReserved}
      name={text}
      className={`w-full px-6 py-3 ${isSelected ? `bg-light-dongguk` : `bg-white hover:border`}  ${isReserved && `bg-sul-gray-400 hover:border-none`} rounded-lg justify-start items-center gap-2.5 inline-flex`}
    >
      <p className="text-black text-[15px] font-normal leading-tight ">
        {text}
      </p>
    </button>
  );
};

export default Menu;

interface MenuProps {
  isSelected: boolean;
  text: string;
  isReserved?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const Menu = ({ isSelected, text, isReserved, onClick }: MenuProps) => {
  console.log(isReserved);
  return (
    <button
      onClick={onClick}
      disabled={isSelected || isReserved}
      name={text}
      className={`w-full px-6 py-3 ${isSelected ? `bg-light-dongguk` : isReserved ? `bg-sul-gray-200 hover:border-none` : `bg-white hover:border`}  rounded-lg justify-start items-center gap-2.5 inline-flex`}
    >
      <p className="text-black text-[15px] font-normal leading-tight ">
        {text}
      </p>
    </button>
  );
};

export default Menu;

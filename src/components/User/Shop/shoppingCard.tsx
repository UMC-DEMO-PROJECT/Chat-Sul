import { useNavigate } from 'react-router-dom';
import Icon from 'shared/ui/Icon/Icon';

interface ShoppingCard {
  icon: string;
  titleP: string;
  descriptionP: string;
  navigation: string;
}

const ShoppingCard = ({
  icon,
  titleP,
  descriptionP,
  navigation,
}: ShoppingCard) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`${navigation}`);
  };
  return (
    <button
      onClick={handleClick}
      className="flex px-10 py-5 items-center gap-8 self-stretch rounded-xl border-[0.2px] border-solid border-[#8E8E93] bg-white shadow-[0_2px_20px_0_rgba(0,0,0,0.04)]"
    >
      <Icon name={icon} size={34} />
      <div className="flex flex-col justify-center items-start gap-1">
        <p className="text-[22px] font-bold text-black">{titleP}</p>
        <p className="text-[11px] text-[#8E8E93]">{descriptionP}</p>
      </div>
    </button>
  );
};

export default ShoppingCard;

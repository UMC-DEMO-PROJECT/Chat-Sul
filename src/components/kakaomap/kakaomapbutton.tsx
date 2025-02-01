import Icon from 'shared/ui/Icon/Icon';
import { ButtonHTMLAttributes, PropsWithChildren } from 'react';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  IconName: string;
}

const KakaoMapButton = ({
  IconName,
  onClick,
}: PropsWithChildren<IButtonProps>) => {
  return (
    <button
      className="flex p-[10px] items-center gap-[10px] z-20 rounded-lg border-[0.2px] border-solid border-[#8E8E93] bg-white shadow-[0_2px_20px_rgba(0,0,0,0.16)"
      onClick={onClick}
    >
      <Icon name={IconName} size={7} />
    </button>
  );
};

export default KakaoMapButton;

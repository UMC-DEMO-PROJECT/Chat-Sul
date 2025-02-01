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
    <button className="w-[80px] h-[80px] bg-transparent z-20" onClick={onClick}>
      <Icon name={IconName} className="w-[5px] h-[5px]" />
    </button>
  );
};

export default KakaoMapButton;

import classNames from 'classnames';

type TButtonStyleProps = {
  size: 'small' | 'medium' | 'large';
  colorType: 'filled' | 'tint' | 'unable';
};
interface IButtonProps extends TButtonStyleProps {
  children: React.ReactNode;
  onClick?: () => void;
}
const Button = ({ children, onClick, size, colorType }: IButtonProps) => {
  const baseStyle = 'rounded-2xl';
  const sizeStyle = {
    small: 'p-3 gap-1',
    medium: 'py-[14px] px-[20px] gap-2',
    large: 'py-[16px] px-[24px] gap-3',
  };
  const colorStyle = {
    filled: 'bg-[#CB6015] text-white',
    tint: 'bg-[#CB601566] text-[#CB6015]',
    unable: 'bg-[#DEDEDE] text-[#A6A6A6]',
  };
  const buttonClasses = classNames(
    baseStyle,
    sizeStyle[size],
    colorStyle[colorType]
  );

  return (
    <button className={buttonClasses} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;

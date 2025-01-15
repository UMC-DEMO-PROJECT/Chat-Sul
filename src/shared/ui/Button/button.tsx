import classNames from 'classnames';
import { ButtonHTMLAttributes, PropsWithChildren } from 'react';

type TButtonStyleProps = {
  size: 'small' | 'medium' | 'large';
  colorType: 'filled' | 'tint' | 'unable' | 'naver' | 'kakao';
};
interface IButtonProps
  extends TButtonStyleProps,
    ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  customSize?: string;
}
const Button = ({
  children,
  onClick,
  size,
  colorType,
  customSize,
  ...props
}: PropsWithChildren<IButtonProps>) => {
  const baseStyle = 'rounded-2xl';
  const sizeStyle = {
    small: `w-full p-3 gap-1 ${customSize}`,
    medium: `w-full py-[14px] px-[20px] gap-2 ${customSize}`,
    large: `w-full py-[16px] px-[24px] gap-3 ${customSize}`,
  };
  const colorStyle = {
    filled: 'bg-[#CB6015] text-white',
    tint: 'bg-[#CB601566] text-[#CB6015]',
    unable: 'bg-[#DEDEDE] text-[#A6A6A6]',
    naver: 'bg-[#03C75A] text-white',
    kakao: 'bg-[#FDDC3F] text-black',
  };
  const buttonClasses = classNames(
    baseStyle,
    sizeStyle[size],
    colorStyle[colorType]
  );

  return (
    <button className={buttonClasses} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;

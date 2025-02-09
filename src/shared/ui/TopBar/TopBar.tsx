/**
 *
 * TopBar 컴포넌트 뒤로 가기,
 *
 * @param {string} title - TopBar의 제목
 * @param {function} [onFirstClick] - 첫번째 요소 클릭 이벤트
 * @param {function} [onSecondClick] - 두번째 요소 클릭 이벤트
 * @param {React.Reactnode} [children] - 세번째 요소 ReactNode
 *
 */

import { useNavigate } from 'react-router-dom';

interface TopBarProps {
  title: string;
  onFirstClick?: () => void;
  onSecondClick?: () => void;
  children?: React.ReactNode;
}

const TopBar = ({
  title,
  onFirstClick,
  onSecondClick,
  children,
}: TopBarProps) => {
  const navigate = useNavigate();
  const handleBack = () => {
    if (onFirstClick) {
      onFirstClick();
    } else {
      navigate(-1);
    }
  };
  return (
    <div className="flex w-[402px] h-[52px] px-3 py-[14px] items-center overflow-hidden justify-between fixed bg-white">
      <div
        className="w-[50px] flex justify-start cursor-pointer"
        onClick={handleBack}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.1705 4.4545C16.6098 4.89384 16.6098 5.60616 16.1705 6.0455L10.216 12L16.1705 17.9545C16.6098 18.3938 16.6098 19.1062 16.1705 19.5455C15.7312 19.9848 15.0188 19.9848 14.5795 19.5455L7.8295 12.7955C7.39017 12.3562 7.39017 11.6438 7.8295 11.2045L14.5795 4.4545C15.0188 4.01517 15.7312 4.01517 16.1705 4.4545Z"
            fill="black"
          />
        </svg>
      </div>

      <div
        className="text-black text-[17px] leading-snug cursor-pointer font-semibold"
        onClick={onSecondClick}
      >
        {title}
      </div>

      <div className="w-[50px] flex justify-end">{children}</div>
    </div>
  );
};

export default TopBar;

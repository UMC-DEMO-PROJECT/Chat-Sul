/**
 *
 * 수취 상태, 날짜를 나타내고 클릭가능한 Post 컴포넌트입니다.
 *
 * @param {string} title - Post 영역에 표시할 제목
 * @param {function} [onClick] - Post를 클릭했을 때 실행되는 이벤트 핸들러
 * @param {string} date - Post 우측에 표시할 날짜
 * @param {boolean} isReceived - 수취 상태 설정 (true: 완료, false: 미수취)
 *
 */

interface PostProps {
  title: string;
  onClick?: () => void;
  date: string;
  isReceived: boolean;
}

const Post = ({ title, onClick, date, isReceived }: PostProps) => {
  return (
    <div
      className="w-[380px] h-[46px] pl-6 pr-3 py-3 bg-white border-b border-black justify-between items-center flex overflow-hidden "
      onClick={onClick}
    >
      <div className="text-black text-[17px] leading-snug">{title}</div>
      <div className="justify-center items-center gap-2 flex">
        <div className="text-[#8e8e93] text-[13px] font-normal leading-[18px]">
          {date}
        </div>
        {
          <>
            {isReceived ? (
              <div className="text-center text-[#34c759] text-[11px] font-normal font-['SF Pro'] leading-[13px] tracking-tight">
                완료
              </div>
            ) : (
              <div className="text-center text-[#ff3b30] text-[11px] font-normal leading-[13px] tracking-tight">
                미수취
              </div>
            )}
          </>
        }
      </div>
    </div>
  );
};

export default Post;

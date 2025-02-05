/**
 *
 * 수취 상태, 날짜를 나타내고 클릭가능한 Post 컴포넌트입니다.
 *
 * @param {string} title - Post 영역에 표시할 제목
 * @param {string} content - Post 영역에 표시할 내용용
 * @param {function} [onClick] - Post를 클릭했을 때 실행되는 이벤트 핸들러
 * @param {string} date - Post 우측에 표시할 날짜
 * @param {string} isReceived - 수취 상태 설정 (true: 완료, false: 미수취)
 *
 */

interface PostProps {
  title: string;
  content: string;
  onClick?: () => void;
  date: string;
  isReceived: string;
}

const Post = ({ title, content, onClick, date, isReceived }: PostProps) => {
  return (
    <div
      className="w-[356px] p-5 bg-white border-b-[0.2px] border-[#D1D1D6] justify-between items-center flex overflow-hidden cursor-pointer"
      onClick={onClick}
    >
      <div className="flex flex-col gap-3 w-[152px]">
        <p className="text-black text-[17px] leading-snug font-[590]">
          {title}
        </p>
        <p className="text-[#8E8E93] text-[13px] font-normal leading-[18px] overflow-hidden text-ellipsis whitespace-nowrap break-words">
          {content}
        </p>
      </div>

      <div className="justify-center items-center gap-2 flex">
        <div className="text-[#8e8e93] text-[13px] font-normal leading-[18px]">
          {date}
        </div>
        {
          <>
            {isReceived !== 'LOST' ? (
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

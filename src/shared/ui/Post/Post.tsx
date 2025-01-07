/**
 *
 * 클릭가능한 icon을 추가하여 Post를 보여주는 컴포넌트입니다.
 *
 * @param {string} [title] - Post 제목
 * @param {function} onClick - Post를 눌렀을 때 실행될 함수
 * @param {string} [subTitle] - Post 부제목
 * @param {React.ReactNode} [icon] - 제목 왼쪽에 넣을 icon
 *
 */

interface PostProps {
  title: string;
  onClick?: () => void;
  subTitle: string;
  icon: React.ReactNode;
}

const Post = ({ title, onClick, subTitle, icon }: PostProps) => {
  return (
    <div
      className="w-[294px] h-[90px] pl-10 py-5 bg-white rounded-xl shadow-[0px_2px_20px_0px_rgba(0,0,0,0.04)] border border-[#8e8e93] justify-start items-center gap-8 flex overflow-hidden "
      onClick={onClick}
    >
      <div className="relative  overflow-hidden w-[34px] h-[34px]">{icon}</div>
      <div className="flex-col justify-center items-start gap-1 inline-flex">
        <div className="text-black text-[22px] font-bold font-['SF Pro'] leading-7">
          {title}
        </div>
        <div className="text-[#8e8e93] text-[13px] font-normal font-['SF Pro'] leading-[18px]">
          {subTitle}
        </div>
      </div>
    </div>
  );
};

export default Post;

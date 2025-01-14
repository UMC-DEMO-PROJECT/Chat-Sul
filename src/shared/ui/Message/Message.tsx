/**
 *
 * 경고 메세지을 보여주는 Message컴포넌트입니다.
 *
 * @param {string} [text] - 경고 메세지으로 보여줄 내용
 *
 */

interface MessageProps {
  text: string;
}

const Message = ({ text }: MessageProps) => {
  return (
    <div className="h-[17px] px-1 py-0.5 justify-center items-center gap-1 inline-flex overflow-hidden">
      <div className="w-3 h-3 relative  overflow-hidden">
        <svg
          width="12"
          height="13"
          viewBox="0 0 12 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6 2.5C5.47471 2.5 4.95457 2.60346 4.46927 2.80448C3.98396 3.0055 3.54301 3.30014 3.17157 3.67157C2.80014 4.04301 2.5055 4.48396 2.30448 4.96927C2.10346 5.45457 2 5.97471 2 6.5C2 7.02529 2.10346 7.54543 2.30448 8.03073C2.5055 8.51604 2.80014 8.95699 3.17157 9.32843C3.54301 9.69986 3.98396 9.9945 4.46927 10.1955C4.95457 10.3965 5.47471 10.5 6 10.5C7.06087 10.5 8.07828 10.0786 8.82843 9.32843C9.57857 8.57828 10 7.56087 10 6.5C10 5.43913 9.57857 4.42172 8.82843 3.67157C8.07828 2.92143 7.06087 2.5 6 2.5ZM4.08658 1.8806C4.69321 1.62933 5.34339 1.5 6 1.5C7.32608 1.5 8.59785 2.02678 9.53553 2.96447C10.4732 3.90215 11 5.17392 11 6.5C11 7.82608 10.4732 9.09785 9.53553 10.0355C8.59785 10.9732 7.32608 11.5 6 11.5C5.34339 11.5 4.69321 11.3707 4.08658 11.1194C3.47995 10.8681 2.92876 10.4998 2.46447 10.0355C2.00017 9.57124 1.63188 9.02005 1.3806 8.41342C1.12933 7.80679 1 7.15661 1 6.5C1 5.84339 1.12933 5.19321 1.3806 4.58658C1.63188 3.97995 2.00017 3.42876 2.46447 2.96447C2.92876 2.50017 3.47995 2.13188 4.08658 1.8806ZM5.475 4.5C5.475 4.22386 5.69886 4 5.975 4H6.025C6.30114 4 6.525 4.22386 6.525 4.5V4.55C6.525 4.82614 6.30114 5.05 6.025 5.05H5.975C5.69886 5.05 5.475 4.82614 5.475 4.55V4.5ZM6 5.5C6.27614 5.5 6.5 5.72386 6.5 6V8.5C6.5 8.77614 6.27614 9 6 9C5.72386 9 5.5 8.77614 5.5 8.5V6C5.5 5.72386 5.72386 5.5 6 5.5Z"
            fill="#FF3B30"
          />
        </svg>
      </div>
      <div className="text-[#ff3b30] text-[11px] font-normal font-['SF Pro'] leading-[13px] tracking-tight">
        {text}
      </div>
    </div>
  );
};

export default Message;

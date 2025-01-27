// 날짜와 시간은 나눠져서 들어올 수 도 있다.
// 예약페이지에서 navigate를 통해 state로 넘기기

// interface stateProps {
//   title: string;
//   date?: string;
// }

const SuccessMessage = () => {
  // const location = useLocation();
  // const state: stateProps = location.state;

  return (
    <div className="flex flex-col row-start-2">
      <div className="flex justify-center">
        <img src="/icons/check-one.svg" />
      </div>
      <p className="textcenter text-black text-[22px] font-bold leading-7 mt-6">
        예약이 완료되었습니다.
      </p>
      <p className=" text-center text-[#8e8e93] text-xs font-normal leading-none">
        2024년 12월 20일(금) 20시 30분
      </p>
    </div>
  );
};

export default SuccessMessage;

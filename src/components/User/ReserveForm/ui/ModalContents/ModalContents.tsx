const ModalContents = () => {
  return (
    <div className=" flex-col justify-start items-center gap-6 flex">
      <div className="text-black text-[28px] font-bold leading-[34px] tracking-tight">
        예약 전 주의사항
      </div>
      <div className="text-[#8e8e93] text-[11px] font-normal leading-[13px] tracking-tight flex flex-col gap-[2px]">
        <p>• 예약 시간 10분 전까지 도착 부탁드립니다.</p>
        <p>
          • 당일 예약 취소 또는 노쇼(No-Show)는 재예약이 어려울 수 있습니다.
        </p>
        <p>• 예약 인원 변경 시 미리 연락 부탁드립니다.</p>
        <p>• 예약 2일전에는 취소가 불가능합니다.</p>
        <p>• 쾌적한 이용을 위해 음료 및 음식 반입은 제한됩니다.</p>
        <p>• 예약 시간 준수는 모두의 원활한 이용을 위해 필요합니다.</p>
        <p>• 예약 규정을 숙지하시고, 궁금한 사항은 언제든 문의 주세요.</p>
      </div>
    </div>
  );
};

export default ModalContents;

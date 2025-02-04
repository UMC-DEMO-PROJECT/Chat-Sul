import Icon from '../Icon/Icon';

const FailedAPI = ({ text }: { text: string }) => {
  return (
    <div className="flex flex-col items-center gap-4 mt-[209px]">
      <Icon name="Exclamation" />
      <p className="text-[#8E8E93] text-[17px] font-[590]">{text}</p>
    </div>
  );
};

export default FailedAPI;

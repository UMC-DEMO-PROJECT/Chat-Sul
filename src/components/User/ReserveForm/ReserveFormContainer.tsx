import Input from '../../../shared/ui/Input/Input';
import TopBar from '../../../shared/ui/TopBar/TopBar';
import CustomCalendar from './Calendar/CustomCalender';
import InputViewOnly from './ViewOnlyInPut';
import ViewOnlyInputContainer from './ViewOnlyInputContainer';
// 가게 ID, 이름은 Context API를 이용하는게 좋겠다.
// props drilling을 피하고
const ReserveFormContainer = () => {
  const handleBackCilck = () => {
    // navigate(-1); // 가게화면으로 이동
  };

  return (
    <>
      <TopBar title="대관 신청" onFirstClick={handleBackCilck} />
      <div className=" flex flex-col px-6 mt-6 gap-4">
        <Input
          value=""
          onChange={() => {}}
          title="예약자명"
          placeholder="예약자명을 입력해주세요"
        />
        <Input
          value=""
          onChange={() => {}}
          title="입금자명"
          placeholder="입금자명을 입력해주세요"
        />
        <Input
          value=""
          onChange={() => {}}
          title="전화번호"
          placeholder="전화번호를 입력해주세요"
        />
        <ViewOnlyInputContainer />
          <InputViewOnly title="예약일" value="2021-09-01" placeholder="" />
          <CustomCalendar />
        </View>
      </div>
    </>
  );
};

export default ReserveFormContainer;

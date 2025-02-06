import ValidateForm from '../../components/Validate/ValidateForm';
import Title from '../../shared/@common/Title';

const Validate = () => {
  return (
    <div className="flex flex-col justify-center items-center w-[356px] mx-auto mt-[120px]">
      <Title>사업자 인증</Title>
      <ValidateForm />
    </div>
  );
};

export default Validate;

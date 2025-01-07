import Post from './Post';
import lostItem from '../../../../assets/lostItem.svg';
const Example = () => {
  return (
    <Post
      title="제목입니다."
      subTitle="부제목입니다."
      onClick={() => {}}
      icon={<img src={lostItem} />}
    />
  );
};

export default Example;

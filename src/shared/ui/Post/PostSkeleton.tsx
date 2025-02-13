const PostSkeleton = () => {
  return (
    <>
      {new Array(6).fill(0).map((_, i) => (
        <div
          key={i}
          className="w-[356px] h-[90px] p-3 bg-white flex animate-pulse"
        >
          <div className="bg-sul-gray-200 w-full h-full rounded-lg "></div>
        </div>
      ))}
    </>
  );
};

export default PostSkeleton;
